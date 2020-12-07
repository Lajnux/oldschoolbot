import { objectEntries, reduceNumByPercent, Time } from 'e';
import { CommandStore, KlasaMessage } from 'klasa';

import { BotCommand } from '../../lib/BotCommand';
import { Activity, Tasks } from '../../lib/constants';
import { hasGracefulEquipped } from '../../lib/gear/functions/hasGracefulEquipped';
import { MinigameIDsEnum } from '../../lib/minions/data/minigames';
import { minionNotBusy, requiresMinion } from '../../lib/minions/decorators';
import { UserSettings } from '../../lib/settings/types/UserSettings';
import { SepulchreActivityTaskOptions } from '../../lib/types/minions';
import { formatDuration, itemNameFromID } from '../../lib/util';
import addSubTaskToActivityTask from '../../lib/util/addSubTaskToActivityTask';
import { SkillsEnum } from '../../lib/skilling/types';
import { plunderBoosts, plunderRooms } from '../../lib/minions/data/plunder';

export default class extends BotCommand {
	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			altProtection: true,
			oneAtTime: true,
			categoryFlags: ['minion', 'skilling', 'minigame'],
			description: 'Sends your minion to complete the Pyramid Plunder.',
			examples: ['+plunder']
		});
	}

	@requiresMinion
	@minionNotBusy
	async run(msg: KlasaMessage) {
		const thievingLevel = msg.author.skillLevel(SkillsEnum.Thieving);
		const minLevel = plunderRooms[0].thievingLevel;
		if (thievingLevel < minLevel) {
			return msg.send(
				`You need atleast level ${minLevel} Thieving to do the Pyramid Plunder.`
			);
		}

		if (!hasGracefulEquipped(msg.author.settings.get(UserSettings.Gear.Skilling))) {
			return msg.send(
				`You need Graceful equipped in your Skilling setup to do Pyramid Plunder.`
			);
		}

		const completableRooms = plunderRooms.filter(
			room => thievingLevel >= room.thievingLevel
		);

		let plunderTime = Time.Minute * 6;

		const boosts = [];

		// Every 1h becomes 1% faster to a cap of 10%
		const percentFaster = Math.min(
			Math.floor(
				msg.author.getMinigameScore(MinigameIDsEnum.PyramidPlunder) / (Time.Hour / plunderTime)
			),
			10
		);

		boosts.push(`${percentFaster.toFixed(1)}% for minion learning`);
		
		plunderTime = reduceNumByPercent(plunderTime, percentFaster);

		for (const [id, percent] of objectEntries(plunderBoosts)) {
			if (msg.author.hasItemEquippedOrInBank(Number(id))) {
				boosts.push(`${percent}% for ${itemNameFromID(Number(id))}`);
				plunderTime = reduceNumByPercent(plunderTime, percent);
			}
		}
		const maxQuantity = Math.floor(msg.author.maxTripLength / plunderTime);
		const tripLength = maxQuantity * plunderTime;

		await addSubTaskToActivityTask<SepulchreActivityTaskOptions>(
			this.client,
			Tasks.MinigameTicker,
			{
				floors: completableRooms.map(room => room.number),
				quantity: maxQuantity,
				userID: msg.author.id,
				duration: tripLength,
				type: Activity.Sepulchre,
				channelID: msg.channel.id,
				minigameID: MinigameIDsEnum.Sepulchre
			}
		);

		let str = `${
			msg.author.minionName
		} is now doing Pyramid Plunder ${maxQuantity} times, each cycle they are looting the last two rooms ${
			completableRooms[length - 2].number
		} and ${
			completableRooms[completableRooms.length - 1].number
		}, the trip will take ${formatDuration(tripLength)}, with each cycle taking ${formatDuration(
			plunderTime
		)}.`;

		if (boosts.length > 0) {
			str += `\n\n**Boosts:** ${boosts.join(', ')}.`;
		}

		return msg.send(str);
	}
}
