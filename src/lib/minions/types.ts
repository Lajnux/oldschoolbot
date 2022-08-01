import { KlasaUser } from 'klasa';
import { Bank, MonsterKillOptions } from 'oldschooljs';
import SimpleMonster from 'oldschooljs/dist/structures/SimpleMonster';
import { Image } from 'skia-canvas/lib';

import { BitField, PerkTier } from '../constants';
import { GearSetupType, GearStat, OffenceGearStat } from '../gear/types';
import { POHBoosts } from '../poh';
import { LevelRequirements, SkillsEnum } from '../skilling/types';
import { ArrayItemsResolved, ItemBank, Skills } from '../types';
import { MonsterActivityTaskOptions } from '../types/minions';
import { CombatStyles } from './functions';

export type BankBackground = {
	image: Image | null;
	id: number;
	name: string;
	available: boolean;
	collectionLogItemsNeeded?: ItemBank;
	perkTierNeeded?: PerkTier;
	gpCost?: number;
	itemCost?: ItemBank;
	repeatImage?: Image | null;
	bitfield?: BitField;
	sacValueRequired?: number;
	skillsNeeded?: Skills;
	transparent?: true;
} & (
	| {
			hasPurple: true;
			purpleImage: Image | null;
	  }
	| {
			hasPurple?: null;
	  }
);

export type GearRequirement = Partial<{ [key in GearStat]: number }>;
export type GearRequirements = Partial<{ [key in GearSetupType]: GearRequirement }>;

export interface KillableMonster {
	id: number;
	name: string;
	aliases: string[];
	noneCombatCalcTimeToFinish: number;
	table: {
		kill(quantity: number, options: MonsterKillOptions): Bank;
	};
	emoji?: string;
	wildy?: boolean;
	difficultyRating?: number;
	itemsRequired?: ArrayItemsResolved;
	notifyDrops?: ArrayItemsResolved;
	existsInCatacombs?: boolean;
	qpRequired?: number;

	/**
	 * An array of objects of ([key: itemID]: boostPercentage) boosts that apply to
	 * this monster. For each set, only the item with the greatest boost (that the user also possesses)
	 * will be used as boost.
	 */
	itemInBankBoosts?: ItemBank[];
	/**
	 * Whether or not this monster can be groupkilled.
	 */
	groupKillable?: boolean;
	levelRequirements?: LevelRequirements;
	uniques?: ArrayItemsResolved;
	/**
	 * How much healing (health points restored) is needed per kill.
	 */
	healAmountNeeded?: number;
	attackStyleToUse?: OffenceGearStat;
	attackStylesUsed?: OffenceGearStat[];
	/**
	 * The minimum *required* gear stats to fight this monster.
	 */
	minimumGearRequirements?: GearRequirements;
	/**
	 * Boosts for POH objects.
	 */
	pohBoosts?: POHBoosts;
	/**
	 * Whether or not this monster can be attacked using certain combatskills.
	 */
	immuneToCombatSkills?: GearSetupType[];
	/**
	 * Combat simulation information. The time should be specified in seconds.
	 */
	defaultStyleToUse?: OffenceGearStat;
	mechanicsTime?: number;
	mechanicsDamage?: number;
	bankTripTime?: number;
	killsPerBankTrip?: number;
	respawnTime?: number;
	// Add variable for multiStyleFight like Zulrah. How?
	defaultCombatStyles?: CombatStyles[];
	disallowedCombatStyles?: CombatStyles[];
	customMonsterHP?: number;
	combatXpMultiplier?: number;
	itemCost?: Consumable;
	superior?: SimpleMonster;
	slayerOnly?: boolean;
	canBarrage?: boolean;
	canCannon?: boolean;
	cannonMulti?: boolean;
	specialLoot?: (loot: Bank, user: KlasaUser, data: MonsterActivityTaskOptions) => Promise<void>;
	effect?: (opts: {
		messages: string[];
		user: KlasaUser;
		quantity: number;
		monster: KillableMonster;
		loot: Bank;
		data: MonsterActivityTaskOptions;
	}) => Promise<unknown>;
	isConverted?: Boolean;
}
/*
 * Monsters will have an array of Consumables
 * Math.ceil(duration / Time.Minute * qtyPerMinute)
 * Or quantity * qtyPerKill.
 */
export interface Consumable {
	itemCost: Bank;
	qtyPerMinute?: number;
	qtyPerKill?: number;
	// For staff of the dead / kodai
	isRuneCost?: boolean;
	alternativeConsumables?: Consumable[];
}

export interface AddXpParams {
	skillName: SkillsEnum;
	amount: number;
	duration?: number;
	multiplier?: boolean;
	minimal?: boolean;
	artificial?: boolean;
}

export interface AddMonsterXpParams {
	monsterID: number;
	quantity: number;
	duration: number;
	isOnTask: boolean;
	taskQuantity: number | null;
	minimal?: boolean;
	usingCannon?: boolean;
	cannonMulti?: boolean;
	burstOrBarrage?: number;
	superiorCount?: number;
}

export interface ResolveAttackStylesParams {
	monsterID: number;
	boostMethod?: string;
}

export interface BlowpipeData {
	scales: number;
	dartQuantity: number;
	dartID: number | null;
}
export type Flags = Record<string, string | number>;
export type FlagMap = Map<string, string | number>;
