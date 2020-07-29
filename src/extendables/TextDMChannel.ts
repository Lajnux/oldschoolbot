import { Extendable, ExtendableStore, KlasaMessage } from 'klasa';
import { MessageAttachment, TextChannel, DMChannel } from 'discord.js';

import { Bank } from '../lib/types';

export default class extends Extendable {
	public constructor(store: ExtendableStore, file: string[], directory: string) {
		super(store, file, directory, { appliesTo: [TextChannel, DMChannel] });
	}

	async sendBankImage(
		this: KlasaMessage,
		{
			bank,
			content,
			title,
			background,
			flags
		}: {
			bank: Bank;
			content?: string;
			title?: string;
			background?: number;
			flags?: Record<string, string>;
		}
	) {
		const image = await this.client.tasks
			.get('bankImage')!
			.generateBankImage(bank, title, true, { background: background ?? 1, ...flags });
		return this.send(content, new MessageAttachment(image));
	}
}
