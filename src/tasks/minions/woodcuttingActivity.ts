import { Bank } from 'oldschooljs';

import { Emoji, Events } from '../../lib/constants';
import addSkillingClueToLoot from '../../lib/minions/functions/addSkillingClueToLoot';
import Woodcutting from '../../lib/skilling/skills/woodcutting';
import { SkillsEnum } from '../../lib/skilling/types';
import { WoodcuttingActivityTaskOptions } from '../../lib/types/minions';
import { roll } from '../../lib/util';
import { calcMaxTripLength } from '../../lib/util/calcMaxTripLength';
import { handleTripFinish } from '../../lib/util/handleTripFinish';

export const woodcuttingTask: MinionTask = {
	type: 'Woodcutting',
	async run(data: WoodcuttingActivityTaskOptions) {
		const { logID, quantity, userID, channelID, duration, powerchopping } = data;
		const user = await mUserFetch(userID);

		const log = Woodcutting.Logs.find(Log => Log.id === logID)!;

		let xpReceived = quantity * log.xp;
		let bonusXP = 0;

		// If they have the entire lumberjack outfit, give an extra 0.5% xp bonus
		if (
			user.gear.skilling.hasEquipped(
				Object.keys(Woodcutting.lumberjackItems).map(i => parseInt(i)),
				true
			)
		) {
			const amountToAdd = Math.floor(xpReceived * (2.5 / 100));
			xpReceived += amountToAdd;
			bonusXP += amountToAdd;
		} else {
			// For each lumberjack item, check if they have it, give its' XP boost if so.
			for (const [itemID, bonus] of Object.entries(Woodcutting.lumberjackItems)) {
				if (user.gear.skilling.hasEquipped([parseInt(itemID)], false)) {
					const amountToAdd = Math.floor(xpReceived * (bonus / 100));
					xpReceived += amountToAdd;
					bonusXP += amountToAdd;
				}
			}
		}

		const xpRes = await user.addXP({
			skillName: SkillsEnum.Woodcutting,
			amount: xpReceived,
			duration
		});

		let loot = new Bank();

		if (!powerchopping) {
			loot.add(log.id, quantity);
		}
		// Add clue scrolls
		if (log.clueScrollChance) {
			addSkillingClueToLoot(user, SkillsEnum.Woodcutting, quantity, log.clueScrollChance, loot);
		}

		let str = `${user}, ${user.minionName} finished woodcutting. ${xpRes}`;

		if (bonusXP > 0) {
			str += `. **Bonus XP:** ${bonusXP.toLocaleString()}`;
		}

		// Roll for pet
		if (log.petChance && roll((log.petChance - user.skillLevel(SkillsEnum.Woodcutting) * 25) / quantity)) {
			loot.add('Beaver');
			str += "\n**You have a funny feeling you're being followed...**";
			globalClient.emit(
				Events.ServerNotification,
				`${Emoji.Woodcutting} **${user.usernameOrMention}'s** minion, ${
					user.minionName
				}, just received a Beaver while cutting ${log.name} at level ${user.skillLevel(
					'woodcutting'
				)} Woodcutting!`
			);
		}

		str += `\nYou received ${loot}.`;

		await transactItems({
			userID: user.id,
			collectionLog: true,
			itemsToAdd: loot
		});

		const theQuantity = duration > 0.9 * calcMaxTripLength(user, 'Woodcutting') ? undefined : quantity;
		handleTripFinish(
			user,
			channelID,
			str,
			[
				'chop',
				{
					name: log.name,
					quantity: theQuantity,
					powerchop: powerchopping
				},
				true
			],
			undefined,
			data,
			loot
		);
	}
};
