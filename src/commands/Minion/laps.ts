import { MessageAttachment } from 'discord.js';
import { randInt, Time } from 'e';
import { CommandStore, KlasaMessage } from 'klasa';
import { Bank } from 'oldschooljs';
import { Item } from 'oldschooljs/dist/meta/types';

import { Activity } from '../../lib/constants';
import { minionNotBusy, requiresMinion } from '../../lib/minions/decorators';
import { ClientSettings } from '../../lib/settings/types/ClientSettings';
import { UserSettings } from '../../lib/settings/types/UserSettings';
import Agility from '../../lib/skilling/skills/agility';
import { SkillsEnum } from '../../lib/skilling/types';
import { BotCommand } from '../../lib/structures/BotCommand';
import { AgilityActivityTaskOptions } from '../../lib/types/minions';
import { formatDuration, stringMatches, updateBankSetting } from '../../lib/util';
import addSubTaskToActivityTask from '../../lib/util/addSubTaskToActivityTask';

const unlimitedFireRuneProviders = [
	'Staff of fire',
	'Fire battlestaff',
	'Mystic fire staff',
	'Lava battlestaff',
	'Mystic lava staff',
	'Steam battlestaff',
	'Mystic steam staff',
	'Smoke battlestaff',
	'Mystic smoke staff',
	'Tome of fire'
];

function alching(msg: KlasaMessage, tripLength: number) {
	if (msg.author.skillLevel(SkillsEnum.Magic) < 55) return null;
	const bank = msg.author.bank();
	const favAlchables = msg.author.getUserFavAlchs() as Item[];

	if (!msg.flagArgs.alch) {
		return null;
	}
	if (favAlchables.length === 0) {
		return null;
	}

	const [itemToAlch] = favAlchables;

	const alchItemQty = bank.amount(itemToAlch.id);
	const nats = bank.amount('Nature rune');
	const fireRunes = bank.amount('Fire rune');

	const hasInfiniteFireRunes = msg.author.hasItemEquippedAnywhere(unlimitedFireRuneProviders);

	let maxCasts = Math.floor(tripLength / (Time.Second * (3 + 10)));
	maxCasts = Math.min(alchItemQty, maxCasts);
	maxCasts = Math.min(nats, maxCasts);
	if (!hasInfiniteFireRunes) {
		maxCasts = Math.min(fireRunes / 5, maxCasts);
	}
	maxCasts = Math.floor(maxCasts);

	const bankToRemove = new Bank().add('Nature rune', maxCasts).add(itemToAlch.id, maxCasts);
	if (!hasInfiniteFireRunes) {
		bankToRemove.add('Fire rune', maxCasts * 5);
	}

	return {
		maxCasts,
		bankToRemove,
		itemToAlch
	};
}

export default class extends BotCommand {
	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			altProtection: true,
			oneAtTime: true,
			cooldown: 1,
			usage: '[quantity:int{1}|name:...string] [name:...string]',
			usageDelim: ' ',
			description: 'Sends your minion to do laps of an agility course.',
			examples: ['+laps gnome', '+laps 5 draynor'],
			categoryFlags: ['minion', 'skilling']
		});
	}

	@requiresMinion
	@minionNotBusy
	async run(msg: KlasaMessage, [quantity, name = '']: [null | number | string, string]) {
		if (typeof quantity === 'string') {
			name = quantity;
			quantity = null;
		}

		if (msg.flagArgs.xphr) {
			let str = 'Approximate XP/Hr (varies based on RNG)\n\n';
			for (let i = 1; i < 100; i++) {
				str += `\n---- Level ${i} ----`;
				let results: [string, number][] = [];
				for (const course of Agility.Courses) {
					if (i < course.level) continue;
					let duration = 3600000000;
					const timePerLap = course.lapTime * Time.Second;
					quantity = Math.floor(duration / timePerLap);
					duration = quantity * timePerLap;
					let lapsFailed = 0;
					for (let t = 0; t < quantity; t++) {
						if (randInt(1, 100) > (100 * i) / (course.level + 5)) {
							lapsFailed += 1;
						}
					}
					const xpReceived = (quantity - lapsFailed / 2) * course.xp;
					results.push([course.name, Math.round(xpReceived / (duration / Time.Hour))]);
				}
				for (const [name, xp] of results.sort((a, b) => a[1] - b[1])) {
					str += `\n${name} ${xp.toLocaleString()} XP/HR.`;
				}
				str += '\n\n\n';
			}
			return msg.channel.send({ files: [new MessageAttachment(Buffer.from(str), 'lapsXPHR.txt')] });
		}

		const course = Agility.Courses.find(course => course.aliases.some(alias => stringMatches(alias, name)));

		if (!course) {
			return msg.channel.send(
				`Thats not a valid course. Valid courses are ${Agility.Courses.map(course => course.name).join(', ')}.`
			);
		}

		if (msg.author.skillLevel(SkillsEnum.Agility) < course.level) {
			return msg.channel.send(
				`${msg.author.minionName} needs ${course.level} agility to train at ${course.name}.`
			);
		}

		if (course.qpRequired && msg.author.settings.get(UserSettings.QP) < course.qpRequired) {
			return msg.channel.send(`You need atleast ${course.qpRequired} Quest Points to do this course.`);
		}

		const maxTripLength = msg.author.maxTripLength(Activity.Agility);

		// If no quantity provided, set it to the max.
		const timePerLap = course.lapTime * Time.Second;
		if (quantity === null) {
			quantity = Math.floor(maxTripLength / timePerLap);
		}
		const duration = quantity * timePerLap;

		if (duration > maxTripLength) {
			return msg.channel.send(
				`${msg.author.minionName} can't go on trips longer than ${formatDuration(
					maxTripLength
				)}, try a lower quantity. The highest amount of ${course.name} laps you can do is ${Math.floor(
					maxTripLength / timePerLap
				)}.`
			);
		}

		let response = `${msg.author.minionName} is now doing ${quantity}x ${
			course.name
		} laps, it'll take around ${formatDuration(duration)} to finish.`;

		const alchResult = course.name === 'Ape Atoll Agility Course' ? null : alching(msg, duration);
		if (alchResult !== null) {
			if (!msg.author.owns(alchResult.bankToRemove)) {
				return msg.channel.send(`You don't own ${alchResult.bankToRemove}.`);
			}

			await msg.author.removeItemsFromBank(alchResult.bankToRemove);
			response += `\n\nYour minion is alching ${alchResult.maxCasts}x ${alchResult.itemToAlch.name} while training. Removed ${alchResult.bankToRemove} from your bank.`;
			updateBankSetting(this.client, ClientSettings.EconomyStats.MagicCostBank, alchResult.bankToRemove);
		}

		await addSubTaskToActivityTask<AgilityActivityTaskOptions>({
			courseID: course.name,
			userID: msg.author.id,
			channelID: msg.channel.id,
			quantity,
			duration,
			type: Activity.Agility,
			alch:
				alchResult === null
					? null
					: {
							itemID: alchResult.itemToAlch.id,
							quantity: alchResult.maxCasts
					  }
		});

		return msg.channel.send(response);
	}
}
