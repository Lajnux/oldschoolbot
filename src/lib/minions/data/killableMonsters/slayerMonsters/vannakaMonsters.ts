import { Monsters } from 'oldschooljs';
import { KillableMonster } from '../../../types';
import resolveItems, { deepResolveItems } from '../../../../util/resolveItems';
import itemID from '../../../../util/itemID';
import { Time } from '../../../../constants';
// import { GearSetupTypes, GearStat } from '../../../../gear/types';

const VannakaMonsters: KillableMonster[] = [
	{
		id: Monsters.AberrantSpectre.id,
		name: Monsters.AberrantSpectre.name,
		aliases: Monsters.AberrantSpectre.aliases,
		timeToFinish: Time.Second * 35,
		table: Monsters.AberrantSpectre,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: deepResolveItems([['Nose peg', 'Slayer helmet']]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 11
		},
		levelRequirements: {
			slayer: 60
		}
	},
	{
		id: Monsters.AbyssalDemon.id,
		name: Monsters.AbyssalDemon.name,
		aliases: Monsters.AbyssalDemon.aliases,
		timeToFinish: Time.Second * 30,
		table: Monsters.AbyssalDemon,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 15
		},
		levelRequirements: {
			slayer: 85
		}
	},
	{
		id: Monsters.Ankou.id,
		name: Monsters.Ankou.name,
		aliases: Monsters.Ankou.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.Ankou,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.BabyBlueDragon.id,
		name: Monsters.BabyBlueDragon.name,
		aliases: Monsters.BabyBlueDragon.aliases,
		timeToFinish: Time.Second * 18,
		table: Monsters.BabyBlueDragon,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 1,
		itemsRequired: resolveItems(['Anti-dragon shield']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {}
	},
	{
		id: Monsters.BabyGreenDragon.id,
		name: Monsters.BabyGreenDragon.name,
		aliases: Monsters.BabyGreenDragon.aliases,
		timeToFinish: Time.Second * 17,
		table: Monsters.BabyGreenDragon,
		emoji: '<:fishing:630911040091193356>',
		wildy: true,
		canBeKilled: true,
		difficultyRating: 1,
		itemsRequired: resolveItems(['Anti-dragon shield']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Basilisk.id,
		name: Monsters.Basilisk.name,
		aliases: Monsters.Basilisk.aliases,
		timeToFinish: Time.Second * 38,
		table: Monsters.Basilisk,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: deepResolveItems([['Mirror shield', "V's shield"]]),
		notifyDrops: resolveItems([]),
		qpRequired: 1,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 40
		}
	},
	{
		id: Monsters.BasiliskKnight.id,
		name: Monsters.BasiliskKnight.name,
		aliases: Monsters.BasiliskKnight.aliases,
		timeToFinish: Time.Second * 110,
		table: Monsters.BasiliskKnight,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 120,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {
			slayer: 60
		}
	},
	{
		id: Monsters.Bloodveld.id,
		name: Monsters.Bloodveld.name,
		aliases: Monsters.Bloodveld.aliases,
		timeToFinish: Time.Second * 32,
		table: Monsters.Bloodveld,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 1,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 50
		}
	},
	{
		id: Monsters.BlueDragon.id,
		name: Monsters.BlueDragon.name,
		aliases: Monsters.BlueDragon.aliases,
		timeToFinish: Time.Second * 30,
		table: Monsters.BlueDragon,
		emoji: '',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems(['Anti-dragon shield']),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Zamorakian spear')]: 10,
			[itemID('Slayer helmet')]: 10
		}
	},
	{
		id: Monsters.BrineRat.id,
		name: Monsters.BrineRat.name,
		aliases: Monsters.BrineRat.aliases,
		timeToFinish: Time.Second * 38,
		table: Monsters.BrineRat,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 3,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 47
		}
	},
	{
		id: Monsters.BronzeDragon.id,
		name: Monsters.BronzeDragon.name,
		aliases: Monsters.BronzeDragon.aliases,
		timeToFinish: Time.Second * 85,
		table: Monsters.BronzeDragon,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems(['Anti-dragon shield']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.BrutalBlueDragon.id,
		name: Monsters.BrutalBlueDragon.name,
		aliases: Monsters.BrutalBlueDragon.aliases,
		timeToFinish: Time.Second * 140,
		table: Monsters.BrutalBlueDragon,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 4,
		itemsRequired: resolveItems(['Anti-dragon shield']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {}
	},
	{
		id: Monsters.BrutalGreenDragon.id,
		name: Monsters.BrutalGreenDragon.name,
		aliases: Monsters.BrutalGreenDragon.aliases,
		timeToFinish: Time.Second * 130,
		table: Monsters.BrutalGreenDragon,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 4,
		itemsRequired: resolveItems(['Anti-dragon shield']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Crocodile.id,
		name: Monsters.Crocodile.name,
		aliases: Monsters.Crocodile.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.Crocodile,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems(['Waterskin(4)']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Dagannoth.id,
		name: Monsters.Dagannoth.name,
		aliases: Monsters.Dagannoth.aliases,
		timeToFinish: Time.Second * 12,
		table: Monsters.Dagannoth,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 2,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10,
			[itemID('Dragonbone necklace')]: 2
		},
		levelRequirements: {}
	},
	{
		id: Monsters.DagannothSpawn.id,
		name: Monsters.DagannothSpawn.name,
		aliases: Monsters.DagannothSpawn.aliases,
		timeToFinish: Time.Second * 8,
		table: Monsters.DagannothSpawn,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 1,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 2,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 7
		},
		levelRequirements: {}
	},
	{
		id: Monsters.DagganothFledgeling.id,
		name: Monsters.DagganothFledgeling.name,
		aliases: Monsters.DagganothFledgeling.aliases,
		timeToFinish: Time.Second * 20,
		table: Monsters.DagganothFledgeling,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 2,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {}
	},
	{
		id: Monsters.DeviantSpectre.id,
		name: Monsters.DeviantSpectre.name,
		aliases: Monsters.DeviantSpectre.aliases,
		timeToFinish: Time.Second * 40,
		table: Monsters.DeviantSpectre,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: deepResolveItems([['Nose peg', 'Slayer helmet']]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {
			slayer: 60
		}
	},
	{
		id: Monsters.DustDevil.id,
		name: Monsters.DustDevil.name,
		aliases: Monsters.DustDevil.aliases,
		timeToFinish: Time.Second * 19,
		table: Monsters.DustDevil,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: deepResolveItems([['Facemask', 'Slayer helmet']]),
		notifyDrops: resolveItems([]),
		qpRequired: 4,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 65
		}
	},
	{
		id: Monsters.ElfArcher.id,
		name: Monsters.ElfArcher.name,
		aliases: Monsters.ElfArcher.aliases,
		timeToFinish: Time.Second * 55,
		table: Monsters.ElfArcher,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.ElfWarrior.id,
		name: Monsters.ElfWarrior.name,
		aliases: Monsters.ElfWarrior.aliases,
		timeToFinish: Time.Second * 55,
		table: Monsters.ElfWarrior,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.FeverSpider.id,
		name: Monsters.FeverSpider.name,
		aliases: Monsters.FeverSpider.aliases,
		timeToFinish: Time.Second * 12,
		table: Monsters.FeverSpider,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {
			slayer: 42
		}
	},
	{
		id: Monsters.FireGiant.id,
		name: Monsters.FireGiant.name,
		aliases: Monsters.FireGiant.aliases,
		timeToFinish: Time.Second * 16,
		table: Monsters.FireGiant,
		emoji: '',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		notifyDrops: resolveItems(['Giant champion scroll']),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		}
	},
	{
		id: Monsters.Gargoyle.id,
		name: Monsters.Gargoyle.name,
		aliases: Monsters.Gargoyle.aliases,
		timeToFinish: Time.Second * 30,
		table: Monsters.Gargoyle,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: deepResolveItems([['Rock hammer', 'Rock thrownhammer', 'Granite hammer']]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {
			slayer: 75
		}
	},
	{
		id: Monsters.GiantSeaSnake.id,
		name: Monsters.GiantSeaSnake.name,
		aliases: Monsters.GiantSeaSnake.aliases,
		timeToFinish: Time.Second * 30,
		table: Monsters.GiantSeaSnake,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 4,
		itemsRequired: resolveItems(['Antidote++(4)']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 40
		}
	},
	{
		id: Monsters.GreaterNechryael.id,
		name: Monsters.GreaterNechryael.name,
		aliases: Monsters.GreaterNechryael.aliases,
		timeToFinish: Time.Second * 90,
		table: Monsters.GreaterNechryael,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 5,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 13,
			[itemID('Arclight')]: 10
		},
		levelRequirements: {
			slayer: 80
		}
	},
	{
		id: Monsters.GreenDragon.id,
		name: Monsters.GreenDragon.name,
		aliases: Monsters.GreenDragon.aliases,
		timeToFinish: Time.Second * 26,
		table: Monsters.GreenDragon,
		emoji: '<:fishing:630911040091193356>',
		wildy: true,
		canBeKilled: true,
		difficultyRating: 5,
		itemsRequired: resolveItems(['Anti-dragon shield']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.HarpieBugSwarm.id,
		name: Monsters.HarpieBugSwarm.name,
		aliases: Monsters.HarpieBugSwarm.aliases,
		timeToFinish: Time.Second * 16,
		table: Monsters.HarpieBugSwarm,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems(['Lit bug lantern']),
		notifyDrops: resolveItems([]),
		qpRequired: 1,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 5
		},
		levelRequirements: {
			slayer: 33,
			firemaking: 33
		}
	},
	{
		id: Monsters.Hellhound.id,
		name: Monsters.Hellhound.name,
		aliases: Monsters.Hellhound.aliases,
		timeToFinish: Time.Second * 30,
		table: Monsters.Hellhound,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 14
		},
		levelRequirements: {}
	},
	{
		id: Monsters.IceGiant.id,
		name: Monsters.IceGiant.name,
		aliases: Monsters.IceGiant.aliases,
		timeToFinish: Time.Second * 27,
		table: Monsters.IceGiant,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {}
	},
	{
		id: Monsters.IceTroll.id,
		name: Monsters.IceTroll.name,
		aliases: Monsters.IceTroll.aliases,
		timeToFinish: Time.Second * 40,
		table: Monsters.IceTroll,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {}
	},
	{
		id: Monsters.InfernalMage.id,
		name: Monsters.InfernalMage.name,
		aliases: Monsters.InfernalMage.aliases,
		timeToFinish: Time.Second * 18,
		table: Monsters.InfernalMage,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {
			slayer: 45
		}
	},
	{
		id: Monsters.IorwerthArcher.id,
		name: Monsters.IorwerthArcher.name,
		aliases: Monsters.IorwerthArcher.aliases,
		timeToFinish: Time.Second * 60,
		table: Monsters.IorwerthArcher,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.IorwerthWarrior.id,
		name: Monsters.IorwerthWarrior.name,
		aliases: Monsters.IorwerthWarrior.aliases,
		timeToFinish: Time.Second * 63,
		table: Monsters.IorwerthWarrior,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Jelly.id,
		name: Monsters.Jelly.name,
		aliases: Monsters.Jelly.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.Jelly,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 52
		}
	},
	{
		id: Monsters.JungleHorror.id,
		name: Monsters.JungleHorror.name,
		aliases: Monsters.JungleHorror.aliases,
		timeToFinish: Time.Second * 18,
		table: Monsters.JungleHorror,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 20,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 7
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Kurask.id,
		name: Monsters.Kurask.name,
		aliases: Monsters.Kurask.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.Kurask,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: deepResolveItems([
			['Leaf-bladed spear', 'Leaf-bladed battleaxe', 'Leaf-bladed sword']
		]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 70
		}
	},
	{
		id: Monsters.LesserDemon.id,
		name: Monsters.LesserDemon.name,
		aliases: Monsters.LesserDemon.aliases,
		timeToFinish: Time.Second * 22,
		table: Monsters.LesserDemon,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Molanisk.id,
		name: Monsters.Molanisk.name,
		aliases: Monsters.Molanisk.aliases,
		timeToFinish: Time.Second * 18,
		table: Monsters.Molanisk,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems(['Slayer bell']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {
			slayer: 39
		}
	},
	{
		id: Monsters.MossGiant.id,
		name: Monsters.MossGiant.name,
		aliases: Monsters.MossGiant.aliases,
		timeToFinish: Time.Second * 30,
		table: Monsters.MossGiant,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {}
	},
	{
		id: Monsters.MountainTroll.id,
		name: Monsters.MountainTroll.name,
		aliases: Monsters.MountainTroll.aliases,
		timeToFinish: Time.Second * 27,
		table: Monsters.MountainTroll,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 1,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Mourner.id,
		name: Monsters.Mourner.name,
		aliases: Monsters.Mourner.aliases,
		timeToFinish: Time.Second * 13,
		table: Monsters.Mourner,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 1,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 4
		},
		levelRequirements: {}
	},
	{
		id: Monsters.MutatedBloodveld.id,
		name: Monsters.MutatedBloodveld.name,
		aliases: Monsters.MutatedBloodveld.aliases,
		timeToFinish: Time.Second * 6,
		table: Monsters.MutatedBloodveld,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 1,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {
			slayer: 50
		}
	},
	{
		id: Monsters.Nechryael.id,
		name: Monsters.Nechryael.name,
		aliases: Monsters.Nechryael.aliases,
		timeToFinish: Time.Second * 70,
		table: Monsters.Nechryael,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 4,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 13,
			[itemID('Arclight')]: 10
		},
		levelRequirements: {
			slayer: 80
		}
	},
	{
		id: Monsters.Ogre.id,
		name: Monsters.Ogre.name,
		aliases: Monsters.Ogre.aliases,
		timeToFinish: Time.Second * 20,
		table: Monsters.Ogre,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 1,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {}
	},
	{
		id: Monsters.OgressShaman.id,
		name: Monsters.OgressShaman.name,
		aliases: Monsters.OgressShaman.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.OgressShaman,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.OgressWarrior.id,
		name: Monsters.OgressWarrior.name,
		aliases: Monsters.OgressWarrior.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.OgressWarrior,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Otherworldlybeing.id,
		name: Monsters.Otherworldlybeing.name,
		aliases: Monsters.Otherworldlybeing.aliases,
		timeToFinish: Time.Second * 20,
		table: Monsters.Otherworldlybeing,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 1,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {}
	},
	/*
	{
		id: Monsters.ReanimatedAbyssal.id,
		name: Monsters.ReanimatedAbyssal.name,
		aliases: Monsters.ReanimatedAbyssal.aliases,
		timeToFinish: Time.Second * 2,
		table: Monsters.ReanimatedAbyssal,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 5
		},
		levelRequirements: {
			slayer: 5
		}
	},
	{
		id: Monsters.ReanimatedElf.id,
		name: Monsters.ReanimatedElf.name,
		aliases: Monsters.ReanimatedElf.aliases,
		timeToFinish: Time.Second * 2,
		table: Monsters.ReanimatedElf,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 5
		},
		levelRequirements: {
			slayer: 5
		}
	},
	{
		id: Monsters.ReanimatedTroll.id,
		name: Monsters.ReanimatedTroll.name,
		aliases: Monsters.ReanimatedTroll.aliases,
		timeToFinish: Time.Second * 2,
		table: Monsters.ReanimatedTroll,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 5
		},
		levelRequirements: {
			slayer: 5
		}
	},
	*/
	{
		id: Monsters.SeaSnakeHatchling.id,
		name: Monsters.SeaSnakeHatchling.name,
		aliases: Monsters.SeaSnakeHatchling.aliases,
		timeToFinish: Time.Second * 20,
		table: Monsters.SeaSnakeHatchling,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems(['Antidote++(4)']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.SeaSnakeYoung.id,
		name: Monsters.SeaSnakeYoung.name,
		aliases: Monsters.SeaSnakeYoung.aliases,
		timeToFinish: Time.Second * 28,
		table: Monsters.SeaSnakeYoung,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems(['Antidote++(4)']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.ShadowWarrior.id,
		name: Monsters.ShadowWarrior.name,
		aliases: Monsters.ShadowWarrior.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.ShadowWarrior,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.SpiritualMage.id,
		name: Monsters.SpiritualMage.name,
		aliases: Monsters.SpiritualMage.aliases,
		timeToFinish: Time.Second * 28,
		table: Monsters.SpiritualMage,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	},
	{
		id: Monsters.SpiritualRanger.id,
		name: Monsters.SpiritualRanger.name,
		aliases: Monsters.SpiritualRanger.aliases,
		timeToFinish: Time.Second * 36,
		table: Monsters.SpiritualRanger,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 63
		}
	},
	{
		id: Monsters.SpiritualWarrior.id,
		name: Monsters.SpiritualWarrior.name,
		aliases: Monsters.SpiritualWarrior.aliases,
		timeToFinish: Time.Second * 38,
		table: Monsters.SpiritualWarrior,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 68
		}
	},
	{
		id: Monsters.TerrorDog.id,
		name: Monsters.TerrorDog.name,
		aliases: Monsters.TerrorDog.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.TerrorDog,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems(['Slayer ring (8)']),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 8
		},
		levelRequirements: {
			slayer: 40
		}
	},
	{
		id: Monsters.TrollGeneral.id,
		name: Monsters.TrollGeneral.name,
		aliases: Monsters.TrollGeneral.aliases,
		timeToFinish: Time.Second * 60,
		table: Monsters.TrollGeneral,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 12
		},
		levelRequirements: {}
	},
	{
		id: Monsters.Turoth.id,
		name: Monsters.Turoth.name,
		aliases: Monsters.Turoth.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.Turoth,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: deepResolveItems([
			['Leaf-bladed spear', 'Leaf-bladed battleaxe', 'Leaf-bladed sword']
		]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 55
		}
	},
	{
		id: Monsters.WarpedJelly.id,
		name: Monsters.WarpedJelly.name,
		aliases: Monsters.WarpedJelly.aliases,
		timeToFinish: Time.Second * 35,
		table: Monsters.WarpedJelly,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 3,
		itemsRequired: deepResolveItems([
			["Black d'hide body", "Karil's leathertop"],
			["Black d'hide chaps", "Karil's leatherskirt"]
		]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {
			slayer: 52
		}
	},
	{
		id: Monsters.Werewolf.id,
		name: Monsters.Werewolf.name,
		aliases: Monsters.Werewolf.aliases,
		timeToFinish: Time.Second * 25,
		table: Monsters.Werewolf,
		emoji: '<:fishing:630911040091193356>',
		wildy: false,
		canBeKilled: true,
		difficultyRating: 2,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: {
			[itemID('Slayer helmet')]: 10
		},
		levelRequirements: {}
	}
];

export default VannakaMonsters;
