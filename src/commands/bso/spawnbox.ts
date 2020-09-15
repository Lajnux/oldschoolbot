import { CommandStore, KlasaMessage } from 'klasa';
import { Items } from 'oldschooljs';
import { Item } from 'oldschooljs/dist/meta/types';
import { MessageEmbed } from 'discord.js';

import { BotCommand } from '../../lib/BotCommand';
import { Color, PerkTier, Time } from '../../lib/constants';
import { stringMatches, resolveNameBank } from '../../lib/util';

export default class extends BotCommand {
	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			perkTier: PerkTier.Four,
			cooldown: Time.Minute * 45
		});
	}

	async run(msg: KlasaMessage) {
		if (msg.author.id !== '157797566833098752' && msg.channel.id !== '732207379818479756') {
			return msg.send(`You can only use this in the BSO channel.`);
		}

		const randomItem = Items.filter(i => (i as Item).tradeable_on_ge).random() as Item;

		const embed = new MessageEmbed()
			.setColor(Color.Orange)
			.setThumbnail(`https://static.runelite.net/cache/item/icon/${randomItem.id}.png`)
			.setTitle(
				`${msg.author.username} has spawned a Mystery Box. Tell me what this item is called, for a Mystery Box!`
			)
			.setDescription(randomItem.examine);

		await msg.channel.send(embed);

		try {
			const collected = await msg.channel.awaitMessages(
				_msg => stringMatches(_msg.content, randomItem.name),
				{
					max: 1,
					time: 14_000,
					errors: ['time']
				}
			);

			const winner = collected.first()?.author!;
			await winner.addItemsToBank(resolveNameBank({ 'Mystery box': 1 }));
			return msg.channel.send(
				`Congratulations, ${winner}! You got it. I've given you: **1x Mystery box**.`
			);
		} catch (err) {
			return msg.channel.send(`Nobody got it! :(`);
		}
	}
}
