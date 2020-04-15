import { CommandStore, KlasaMessage } from 'klasa';

import slayerMasters from '../../lib/slayer/slayerMasters';
import { BotCommand } from '../../lib/BotCommand';
import { stringMatches, rand, determineCombatLevel } from '../../lib/util';
import nieveTasks from '../../lib/slayer/nieveTasks';
import { UserSettings } from '../../lib/UserSettings';
import { Monsters } from 'oldschooljs';
import bossTasks from '../../lib/slayer/bossTasks';
import turaelTasks from '../../lib/slayer/turaelTasks';
import { SkillsEnum } from '../../lib/skilling/types';

const options = {
	max: 1,
	time: 10000,
	errors: ['time']
};

const taskList = [
	{
		name: 'Nieve',
		tasks: nieveTasks
	},
	{
		name: 'Turael',
		tasks: turaelTasks
	}
];

export default class extends BotCommand {
	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			usage: '<slayermaster:...string>',
			usageDelim: ' ',
			oneAtTime: true,
			cooldown: 1,
			altProtection: true
		});
	}

	async run(msg: KlasaMessage, [slayermaster]: [string]) {
		await msg.author.settings.sync(true);
		if (!msg.author.hasMinion) {
			throw `You don't have a minion yet. You can buy one by typing \`${msg.cmdPrefix}minion buy\`.`;
		}

		if (msg.author.slayerInfo[0] === 1 && slayermaster === 'cancel') {
			if (msg.author.minionIsBusy) {
				return msg.send(msg.author.minionStatus);
			}
			if (msg.author.slayerInfo[4] < 30) {
				return msg.send(`You need 30 Slayer Points to cancel your task.`);
			}
			msg.send(
				`Are you sure you'd like to cancel your current task of ${
					msg.author.slayerInfo[2]
				}x ${
					Monsters.get(msg.author.slayerInfo[1])?.name
				}? It will cost 30 slayer points and your current total is ${
					msg.author.slayerInfo[4]
				}. Say \`confirm\` to continue.`
			);
			try {
				await msg.channel.awaitMessages(
					_msg =>
						_msg.author.id === msg.author.id &&
						_msg.content.toLowerCase() === 'confirm',
					options
				);
			} catch (err) {
				throw `Cancelled request to cancel ${
					Monsters.get(msg.author.slayerInfo[1])?.name
				} slayer task.`;
			}
			const newSlayerPoints = msg.author.slayerInfo[4] - 30;
			// Has task, Slayer task ID, Slayer task quantity, Current slayer master, Slayer points
			const newInfo = [0, 0, 0, 0, newSlayerPoints];
			await msg.author.settings.update(UserSettings.Slayer.SlayerInfo, newInfo);
			return msg.send(`Successfully cancelled task`);
		}

		// If they already have a slayer task tell them what it is

		if (msg.author.slayerInfo[0] === 1) {
			const mon = Monsters.get(msg.author.slayerInfo[1]);
			if (!mon) throw `WTF`;
			let str = `You already have a slayer task of ${msg.author.slayerInfo[2]}x ${mon.name}.\n`;
			const allTasks = nieveTasks.concat(turaelTasks);
			const currentTask = allTasks.find(monster =>
				stringMatches(Monsters.get(msg.author.slayerInfo[1])!.name, monster.name)
			);
			if (currentTask?.alternatives) {
				str += `You can also kill these monsters: ${currentTask?.alternatives}!`;
				const re = /\,/gi;
				return msg.send(str.replace(re, `, `));
			}
			throw str;
		}

		// Figure out what master they're using
		const master = slayerMasters.find(person => stringMatches(slayermaster, person.name));
		if (!master) {
			throw `That's not a valid slayer master. Valid masters are ${slayerMasters
				.map(person => person.name)
				.join(', ')}.`;
		}
		// Get that masters list of tasks
		const listOfTasks = taskList.find(task => stringMatches(slayermaster, task.name));
		if (!listOfTasks) {
			throw `WTF`;
		}

		const userCombatLevel = determineCombatLevel(
			msg.author.skillLevel(SkillsEnum.Prayer),
			msg.author.skillLevel(SkillsEnum.Hitpoints),
			msg.author.skillLevel(SkillsEnum.Defence),
			msg.author.skillLevel(SkillsEnum.Strength),
			msg.author.skillLevel(SkillsEnum.Attack),
			msg.author.skillLevel(SkillsEnum.Magic),
			msg.author.skillLevel(SkillsEnum.Range)
		);
		if (
			master.requirements.combatLevel > userCombatLevel! ||
			master.requirements.slayerLevel! > msg.author.skillLevel(SkillsEnum.Slayer)
		) {
			throw `You need a combat level of ${
				master.requirements.combatLevel
			}, and a slayer level of ${master.requirements.slayerLevel} to use this master! 
You're only ${userCombatLevel} combat, and ${msg.author.skillLevel(SkillsEnum.Slayer)} slayer.`;
		}

		// Filter by slayer level
		const filteredByLevel = listOfTasks.tasks.filter(
			task =>
				Monsters.get(task.ID)?.data.slayerLevelRequired! <=
				msg.author.skillLevel(SkillsEnum.Slayer)
		);

		// Filter by default unlock
		const filteredLockedTasks = filteredByLevel.filter(task => task.unlocked === true);

		// Filter by block list
		const filteredBlockedTasks = filteredLockedTasks.filter(
			task => !msg.author.blockList.includes(task.ID)
		);

		// Filter by quest point requirements
		const currentQP = msg.author.settings.get(UserSettings.QP);
		const filteredByQP = filteredBlockedTasks.filter(
			task => task.requirements?.questPoints! <= currentQP
		);

		// Filter by unlocks
		const filteredBlockedByDefault = master.tasks.filter(task => task.unlocked === true);

		const filteredByUnlocked = filteredBlockedByDefault.filter(task =>
			msg.author.unlockedList.includes(task.ID)
		);
		const filteredByDefaultAndUnlocked = filteredBlockedByDefault.concat(filteredByUnlocked);
		const filteredTasks = filteredByQP.concat(filteredByDefaultAndUnlocked);

		let totalweight = 0;
		for (let i = 0; i < filteredTasks.length; i++) {
			totalweight += filteredTasks[i].weight;
		}
		if (filteredTasks.length === 0) {
			throw `You don't have a high enough Slayer level to get a task from that Master.`;
		}
		let number = rand(1, totalweight);
		for (let i = 0; i < filteredTasks.length; i++) {
			number -= filteredTasks[i].weight;
			if (number <= 0) {
				const slayerMonster = filteredTasks[i];
				if (slayerMonster.name === 'Boss') {
					const filteredBossTasks = bossTasks.filter(
						task =>
							Monsters.get(task.ID)?.data.slayerLevelRequired! <=
							msg.author.skillLevel(SkillsEnum.Slayer)
					);
					const monsterNumber = rand(0, filteredBossTasks.length);
					const monster = filteredBossTasks[monsterNumber];
					const minQuantity = monster.amount[0];
					const maxQuantity = monster.amount[1];
					const quantity = Math.floor(rand(minQuantity, maxQuantity));
					// Has task, Slayer task ID, Slayer task quantity, Current slayer master, Slayer points
					const newInfo = [
						1,
						monster.ID,
						quantity,
						master.masterID,
						msg.author.slayerInfo[4]
					];
					await msg.author.settings.update(UserSettings.Slayer.SlayerInfo, newInfo);

					return msg.send(
						`Your new slayer task is a boss task of ${quantity}x ${monster.name}`
					);
				}
				const minQuantity = slayerMonster.amount[0];
				const maxQuantity = slayerMonster.amount[1];
				const quantity = Math.floor(rand(minQuantity, maxQuantity));
				// Has task, Slayer task ID, Slayer task quantity, Current slayer master, Slayer points
				const newInfo = [
					1,
					slayerMonster.ID,
					quantity,
					master.masterID,
					msg.author.slayerInfo[4] ?? 0
				];
				await msg.author.settings.update(UserSettings.Slayer.SlayerInfo, newInfo, {
					arrayAction: 'overwrite'
				});
				return msg.send(`Your new slayer task is ${quantity}x ${slayerMonster.name}`);
			}
		}
	}
}
