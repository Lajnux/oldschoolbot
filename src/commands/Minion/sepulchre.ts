import { MessageAttachment } from 'discord.js';
import { objectEntries, reduceNumByPercent, Time } from 'e';
import { CommandStore, KlasaMessage } from 'klasa';

import { Activity } from '../../lib/constants';
import { sepulchreBoosts, sepulchreFloors } from '../../lib/minions/data/sepulchre';
import { minionNotBusy, requiresMinion } from '../../lib/minions/decorators';
import { BotCommand } from '../../lib/structures/BotCommand';
import { SepulchreActivityTaskOptions } from '../../lib/types/minions';
import { addArrayOfNumbers, formatDuration, itemNameFromID } from '../../lib/util';
import addSubTaskToActivityTask from '../../lib/util/addSubTaskToActivityTask';
import { SkillsEnum } from './../../lib/skilling/types';

export default class extends BotCommand {
	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			altProtection: true,
			oneAtTime: true,
			categoryFlags: ['minion', 'skilling', 'minigame'],
			description: 'Sends your minion to complete the Hallowed Sepulchre.',
			examples: ['+sepulchre']
		});
	}

	@requiresMinion
	@minionNotBusy
	async run(msg: KlasaMessage) {
		const agilityLevel = msg.author.skillLevel(SkillsEnum.Agility);
		const minLevel = sepulchreFloors[0].agilityLevel;

		if (msg.flagArgs.xphr) {
			let str = 'Approximate XP/Hr (varies based on RNG)\n\n';
			for (let i = minLevel; i < 100; i++) {
				str += `\n---- Level ${i} ----`;
				let results: [number, number][] = [];
				let duration = 3600000000;
				const completableFloors = sepulchreFloors.filter(floor => i >= floor.agilityLevel);
				let lapLength = addArrayOfNumbers(completableFloors.map(floor => floor.time));
				lapLength = reduceNumByPercent(lapLength, 10);
				for (const [,percent] of objectEntries(sepulchreBoosts)) {
					if (true) {
						lapLength = reduceNumByPercent(lapLength, percent);
					}
				}
				const maxLaps = Math.floor(duration / lapLength);
				let agilityXP = 0;
				let floors = completableFloors.map(fl => fl.number);
				const completedFloors = sepulchreFloors.filter(fl => floors.includes(fl.number));
				for (let i = 0; i < maxLaps; i++) {
					for (const floor of completedFloors) {
						agilityXP += floor.xp;
					}
				}
				results.push([Math.round(agilityXP / 1000), floors.pop()!]);
				for (const [xp, floors] of results.sort((a, b) => a[1] - b[1])) {
					str += `\n${xp.toLocaleString()} XP/HR. Floors up to ${floors}.`;
				}
				str += '\n\n\n';
			}
			return msg.channel.send({ files: [new MessageAttachment(Buffer.from(str), 'sepulchreXPHR.txt')] });
		}

		if (agilityLevel < minLevel) {
			return msg.channel.send(`You need atleast level ${minLevel} Agility to do the Hallowed Sepulchre.`);
		}

		if (!msg.author.hasGracefulEquipped()) {
			return msg.channel.send('You need Graceful equipped in your Skilling setup to do the Hallowed Sepulchre.');
		}

		const completableFloors = sepulchreFloors.filter(floor => agilityLevel >= floor.agilityLevel);
		let lapLength = addArrayOfNumbers(completableFloors.map(floor => floor.time));

		const boosts = [];

		// Every 1h becomes 1% faster to a cap of 10%
		const percentReduced = Math.min(
			Math.floor((await msg.author.getMinigameScore('Sepulchre')) / (Time.Hour / lapLength)),
			10
		);

		boosts.push(`${percentReduced.toFixed(1)}% for minion learning`);

		lapLength = reduceNumByPercent(lapLength, percentReduced);

		for (const [id, percent] of objectEntries(sepulchreBoosts)) {
			if (msg.author.hasItemEquippedOrInBank(Number(id))) {
				boosts.push(`${percent}% for ${itemNameFromID(Number(id))}`);
				lapLength = reduceNumByPercent(lapLength, percent);
			}
		}
		const maxLaps = Math.floor(msg.author.maxTripLength(Activity.Sepulchre) / lapLength);
		const tripLength = maxLaps * lapLength;

		await addSubTaskToActivityTask<SepulchreActivityTaskOptions>({
			floors: completableFloors.map(fl => fl.number),
			quantity: maxLaps,
			userID: msg.author.id,
			duration: tripLength,
			type: Activity.Sepulchre,
			channelID: msg.channel.id,
			minigameID: 'Sepulchre'
		});

		let str = `${
			msg.author.minionName
		} is now doing ${maxLaps} laps of the Sepulchre, in each lap they are doing floors ${
			completableFloors[0].number
		}-${completableFloors[completableFloors.length - 1].number}, the trip will take ${formatDuration(
			tripLength
		)}, with each lap taking ${formatDuration(lapLength)}.`;

		if (boosts.length > 0) {
			str += `\n\n**Boosts:** ${boosts.join(', ')}.`;
		}

		return msg.channel.send(str);
	}
}
