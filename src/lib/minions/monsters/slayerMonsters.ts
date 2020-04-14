import { Monsters } from 'oldschooljs';

import { Bank, ArrayItemsResolved } from '../../types';
import { Time } from 'oldschooljs/dist/constants';
import resolveItems from '../../util/resolveItems';

export interface KillableMonster {
	id: number;
	name: string;
	aliases: string[];
	timeToFinish: number;
	table: {
		kill(quantity: number): Bank;
	};
	emoji: string;
	wildy: boolean;
	canBeKilled: boolean;
	difficultyRating: number;
	itemsRequired: ArrayItemsResolved;
	notifyDrops: ArrayItemsResolved;
	qpRequired: number;

	/**
	 * A object of ([key: itemID]: boostPercentage) boosts that apply to
	 * this monster.
	 */
	itemInBankBoosts?: Bank;
}

const gwdBosses: KillableMonster[] = [
	{
		id: Monsters.Lizardman.id,
		name: Monsters.Lizardman.name,
		aliases: Monsters.Lizardman.aliases,
		timeToFinish: Time.Second * 20,
		table: Monsters.Lizardman,
		emoji: '<:Xerics_talisman_inert:456176488669249539>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 30
	},
	{
		id: Monsters.GreaterDemon.id,
		name: Monsters.GreaterDemon.name,
		aliases: Monsters.GreaterDemon.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.GreaterDemon,
		emoji: '',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Ankou.id,
		name: Monsters.Ankou.name,
		aliases: Monsters.Ankou.aliases,
		timeToFinish: Time.Second * 15,
		table: Monsters.Ankou,
		emoji: '',
		wildy: false,
		canBeKilled: false,
		difficultyRating: 0,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.AberrantSpectre.id,
		name: Monsters.AberrantSpectre.name,
		aliases: Monsters.AberrantSpectre.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.AberrantSpectre,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Dagannoth.id,
		name: Monsters.Dagannoth.name,
		aliases: Monsters.Dagannoth.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Dagannoth,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.RedDragon.id,
		name: Monsters.RedDragon.name,
		aliases: Monsters.RedDragon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.RedDragon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.AbyssalDemon.id,
		name: Monsters.AbyssalDemon.name,
		aliases: Monsters.AbyssalDemon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.AbyssalDemon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.DarkBeast.id,
		name: Monsters.DarkBeast.name,
		aliases: Monsters.DarkBeast.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.DarkBeast,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Hellhound.id,
		name: Monsters.Hellhound.name,
		aliases: Monsters.Hellhound.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Hellhound,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.RuneDragon.id,
		name: Monsters.RuneDragon.name,
		aliases: Monsters.RuneDragon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.RuneDragon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.AdamantDragon.id,
		name: Monsters.AdamantDragon.name,
		aliases: Monsters.AdamantDragon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.AdamantDragon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.ScarabMage.id,
		name: Monsters.ScarabMage.name,
		aliases: Monsters.ScarabMage.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.ScarabMage,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.DemonicGorilla.id,
		name: Monsters.DemonicGorilla.name,
		aliases: Monsters.DemonicGorilla.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.DemonicGorilla,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Drake.id,
		name: Monsters.Drake.name,
		aliases: Monsters.Drake.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Drake,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.IronDragon.id,
		name: Monsters.IronDragon.name,
		aliases: Monsters.IronDragon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.IronDragon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.SkeletalWyvern.id,
		name: Monsters.SkeletalWyvern.name,
		aliases: Monsters.SkeletalWyvern.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.SkeletalWyvern,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Aviansie.id,
		name: Monsters.Aviansie.name,
		aliases: Monsters.Aviansie.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Aviansie,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.DustDevil.id,
		name: Monsters.DustDevil.name,
		aliases: Monsters.DustDevil.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.DustDevil,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.KalphiteWorker.id,
		name: Monsters.KalphiteWorker.name,
		aliases: Monsters.KalphiteWorker.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.KalphiteWorker,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.SmokeDevil.id,
		name: Monsters.SmokeDevil.name,
		aliases: Monsters.SmokeDevil.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.SmokeDevil,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.BasiliskKnight.id,
		name: Monsters.BasiliskKnight.name,
		aliases: Monsters.BasiliskKnight.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.BasiliskKnight,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.ElfWarrior.id,
		name: Monsters.ElfWarrior.name,
		aliases: Monsters.ElfWarrior.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.ElfWarrior,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Kurask.id,
		name: Monsters.Kurask.name,
		aliases: Monsters.Kurask.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Kurask,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.SpiritualMage.id,
		name: Monsters.SpiritualMage.name,
		aliases: Monsters.SpiritualMage.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.SpiritualMage,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Basilisk.id,
		name: Monsters.Basilisk.name,
		aliases: Monsters.Basilisk.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Basilisk,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.SpiritualRanger.id,
		name: Monsters.SpiritualRanger.name,
		aliases: Monsters.SpiritualRanger.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.SpiritualRanger,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.BlackDemon.id,
		name: Monsters.BlackDemon.name,
		aliases: Monsters.BlackDemon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.BlackDemon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.FossilIslandWyvernAncient.id,
		name: Monsters.FossilIslandWyvernAncient.name,
		aliases: Monsters.FossilIslandWyvernAncient.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.FossilIslandWyvernAncient,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.SpiritualWarrior.id,
		name: Monsters.SpiritualWarrior.name,
		aliases: Monsters.SpiritualWarrior.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.SpiritualWarrior,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.BlackDragon.id,
		name: Monsters.BlackDragon.name,
		aliases: Monsters.BlackDragon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.BlackDragon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.FossilIslandWyvernLongTailed.id,
		name: Monsters.FossilIslandWyvernLongTailed.name,
		aliases: Monsters.FossilIslandWyvernLongTailed.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.FossilIslandWyvernLongTailed,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.LocustRider.id,
		name: Monsters.LocustRider.name,
		aliases: Monsters.LocustRider.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.LocustRider,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.SteelDragon.id,
		name: Monsters.SteelDragon.name,
		aliases: Monsters.SteelDragon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.SteelDragon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Bloodveld.id,
		name: Monsters.Bloodveld.name,
		aliases: Monsters.Bloodveld.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Bloodveld,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.FossilIslandWyvernSpitting.id,
		name: Monsters.FossilIslandWyvernSpitting.name,
		aliases: Monsters.FossilIslandWyvernSpitting.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.FossilIslandWyvernSpitting,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Suqah.id,
		name: Monsters.Suqah.name,
		aliases: Monsters.Suqah.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Suqah,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.FossilIslandWyvernTaloned.id,
		name: Monsters.FossilIslandWyvernTaloned.name,
		aliases: Monsters.FossilIslandWyvernTaloned.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.FossilIslandWyvernTaloned,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.MithrilDragon.id,
		name: Monsters.MithrilDragon.name,
		aliases: Monsters.MithrilDragon.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.MithrilDragon,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Turoth.id,
		name: Monsters.Turoth.name,
		aliases: Monsters.Turoth.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Turoth,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.BrineRat.id,
		name: Monsters.BrineRat.name,
		aliases: Monsters.BrineRat.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.BrineRat,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Gargoyle.id,
		name: Monsters.Gargoyle.name,
		aliases: Monsters.Gargoyle.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Gargoyle,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.MountainTroll.id,
		name: Monsters.MountainTroll.name,
		aliases: Monsters.MountainTroll.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.MountainTroll,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.CaveHorror.id,
		name: Monsters.CaveHorror.name,
		aliases: Monsters.CaveHorror.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.CaveHorror,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Zygomite.id,
		name: Monsters.Zygomite.name,
		aliases: Monsters.Zygomite.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Zygomite,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Wyrm.id,
		name: Monsters.Wyrm.name,
		aliases: Monsters.Wyrm.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Wyrm,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.CaveKraken.id,
		name: Monsters.CaveKraken.name,
		aliases: Monsters.CaveKraken.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.CaveKraken,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Nechryael.id,
		name: Monsters.Nechryael.name,
		aliases: Monsters.Nechryael.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Nechryael,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Banshee.id,
		name: Monsters.Banshee.name,
		aliases: Monsters.Banshee.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Banshee,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.CaveBug.id,
		name: Monsters.CaveBug.name,
		aliases: Monsters.CaveBug.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.CaveBug,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Lizard.id,
		name: Monsters.Lizard.name,
		aliases: Monsters.Lizard.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Lizard,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Spider.id,
		name: Monsters.Spider.name,
		aliases: Monsters.Spider.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Spider,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Bat.id,
		name: Monsters.Bat.name,
		aliases: Monsters.Bat.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Bat,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.CaveCrawler.id,
		name: Monsters.CaveCrawler.name,
		aliases: Monsters.CaveCrawler.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.CaveCrawler,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.CrawlingHand.id,
		name: Monsters.CrawlingHand.name,
		aliases: Monsters.CrawlingHand.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.CrawlingHand,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Ghost.id,
		name: Monsters.Ghost.name,
		aliases: Monsters.Ghost.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Ghost,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Minotaur.id,
		name: Monsters.Minotaur.name,
		aliases: Monsters.Minotaur.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Minotaur,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Scorpion.id,
		name: Monsters.Scorpion.name,
		aliases: Monsters.Scorpion.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Scorpion,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Wolf.id,
		name: Monsters.Wolf.name,
		aliases: Monsters.Wolf.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Wolf,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Bear.id,
		name: Monsters.Bear.name,
		aliases: Monsters.Bear.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Bear,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.CaveSlime.id,
		name: Monsters.CaveSlime.name,
		aliases: Monsters.CaveSlime.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.CaveSlime,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.GuardDog.id,
		name: Monsters.GuardDog.name,
		aliases: Monsters.GuardDog.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.GuardDog,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Icefiend.id,
		name: Monsters.Icefiend.name,
		aliases: Monsters.Icefiend.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Icefiend,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Monkey.id,
		name: Monsters.Monkey.name,
		aliases: Monsters.Monkey.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Monkey,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	},
	{
		id: Monsters.Wyrm.id,
		name: Monsters.Wyrm.name,
		aliases: Monsters.Wyrm.aliases,
		timeToFinish: Number(Time.Minute),
		table: Monsters.Wyrm,
		emoji: '<:slayer:630911040560824330>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0
	}
];

export default gwdBosses;
