import { ApplicationCommandOptionType, CommandRunOptions } from 'mahoji';
import { Bank, Monsters } from 'oldschooljs';

import { determineKillLimit } from '../../commands/OSRS_Fun/kill';
import { toTitleCase } from '../../lib/util';
import { Workers } from '../../lib/workers';
import { OSBMahojiCommand } from '../lib/util';

export const killCommand: OSBMahojiCommand = {
	name: 'kill',
	description: 'Simulate killing monsters.',
	options: [
		{
			type: ApplicationCommandOptionType.String,
			name: 'name',
			description: 'The monster you want to simulate killing.',
			required: true,
			autocomplete: async (value: string) => {
				return [
					...Monsters.map(i => ({ name: i.name, aliases: i.aliases })),
					{ name: 'nex', aliases: ['nex'] },
					{ name: 'nightmare', aliases: ['nightmare'] }
				]
					.filter(i => (!value ? true : i.aliases.some(alias => alias.includes(value.toLowerCase()))))
					.map(i => ({
						name: i.name,
						value: i.name
					}));
			}
		},
		{
			type: ApplicationCommandOptionType.Integer,
			name: 'quantity',
			description: 'The quantity you want to simulate.',
			required: true,
			min_value: 1
		}
	],
	run: async ({ options, userID, interaction }: CommandRunOptions<{ name: string; quantity: number }>) => {
		const user = await globalClient.fetchUser(userID);
		interaction.deferReply();

		const result = await Workers.kill({
			quantity: options.quantity,
			bossName: options.name,
			limit: determineKillLimit(user),
			catacombs: false,
			onTask: false
		});

		if (result.error) {
			return result.error;
		}

		const { image } = await globalClient.tasks
			.get('bankImage')!
			.generateBankImage(
				new Bank(result.bank?.bank),
				result.title ?? `Loot from ${options.quantity.toLocaleString()} ${toTitleCase(options.name)}`,
				true,
				{},
				user
			);

		return {
			attachments: [{ buffer: image!, fileName: 'osbot.png' }],
			content: result.content
		};
	}
};
