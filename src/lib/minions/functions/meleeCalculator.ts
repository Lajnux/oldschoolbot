import { randInt, Time } from 'e';
import { KlasaUser } from 'klasa';
import { Monsters } from 'oldschooljs';
import { MonsterAttribute } from 'oldschooljs/dist/meta/monsterData';
import { itemID } from 'oldschooljs/dist/util';

import { hasMeleeVoidEquipped } from '../../gear';
import { UserSettings } from '../../settings/types/UserSettings';
import { calcMaxTripLength } from '../../util/calcMaxTripLength';
import { KillableMonster } from '../types';
import { SkillsEnum } from './../../skilling/types';
import calculatePrayerDrain from './calculatePrayerDrain';
import potionBoostCalculator from './potionBoostCalculator';

interface MeleeStrengthWeaponBonus {
	id: number;
	damageBoost: number;
	againstAttribute?: string;
	againstMonster?: string[];
	wildernessBonus?: boolean;
}

// Added some of the most common melee weapon bonuses.
const meleeStrengthWeaponBonuses: MeleeStrengthWeaponBonus[] = [
	{
		id: itemID('Arclight'),
		damageBoost: 1.7,
		againstAttribute: MonsterAttribute.Demon
	},
	{
		id: itemID('Leaf-bladed battleaxe'),
		damageBoost: 1.175,
		againstMonster: ['kurask', 'turoth']
	},
	{
		id: itemID('Dragon hunter lance'),
		damageBoost: 1.2,
		againstAttribute: MonsterAttribute.Dragon
	},
	{
		id: itemID("Viggora's chainmace"),
		damageBoost: 1.5,
		wildernessBonus: true
	}
];

// Melee Strength Prayer bonus
const meleeStrengthPrayerBonuses = [
	{
		name: 'Piety',
		boost: 1.23
	},
	{
		name: 'Chivalry',
		boost: 1.18
	},
	{
		name: 'Ultimate Strength',
		boost: 1.15
	},
	{
		name: 'Superhuman Strength',
		boost: 1.1
	},
	{
		name: 'Burst of Strength',
		boost: 1.05
	}
];

// Melee Attack Prayer bonus
const meleeAttackPrayerBonuses = [
	{
		name: 'Piety',
		boost: 1.2
	},
	{
		name: 'Chivalry',
		boost: 1.15
	},
	{
		name: 'Incredible Reflexes',
		boost: 1.15
	},
	{
		name: 'Improved Reflexes',
		boost: 1.1
	},
	{
		name: 'Clarity of Thought',
		boost: 1.05
	}
];

export default async function meleeCalculator(
	monster: KillableMonster,
	user: KlasaUser,
	quantity: number | undefined
): Promise<[number, number, number, number, number, string[]]> {
	// https://oldschool.runescape.wiki/w/Damage_per_second/Melee as source.
	const combatStyle = user.settings.get(UserSettings.Minion.MeleeCombatStyle);
	const currentMonsterData = Monsters.find(mon => mon.id === monster.id)?.data;
	if (!currentMonsterData) {
		throw "Monster dosen't exist.";
	}

	const meleeWeapon = user.getGear('melee').equippedWeapon();
	if (meleeWeapon === null || meleeWeapon.weapon === null || combatStyle === null) {
		throw 'No melee weapon is equipped or combatStyle is not choosen.';
	}
	const meleeGear = user.getGear('melee');

	if (!meleeGear) throw 'No melee gear on user.';
	const gearStats = user.getGear('melee').stats;

	// Calculate effective strength level

	const [strengthPotionBoost, strPotUsed] = potionBoostCalculator(user, SkillsEnum.Strength);

	let prayerStrBonus = 1;
	for (const meleeStrPrayerBonus of meleeStrengthPrayerBonuses) {
		if (user.settings.get(UserSettings.SelectedPrayers).includes(meleeStrPrayerBonus.name.toLowerCase())) {
			prayerStrBonus = meleeStrPrayerBonus.boost;
			break;
		}
	}
	let effectiveStrLvl = Math.floor(user.skillLevel(SkillsEnum.Strength) + strengthPotionBoost) * prayerStrBonus + 8;
	let attackStyle = '';
	let combatType = '';
	for (let stance of meleeWeapon.weapon!.stances) {
		if (stance.combat_style.toLowerCase() === combatStyle) {
			attackStyle = stance.attack_style!;
			combatType = stance.attack_type!;
			break;
		}
	}

	if (attackStyle === 'aggresive') {
		effectiveStrLvl += 3;
	}
	if (attackStyle === 'controlled') {
		effectiveStrLvl += 1;
	}

	// Multiply by void bonus if wearing full melee void
	if (hasMeleeVoidEquipped(meleeGear)) {
		effectiveStrLvl *= 1.1;
	}

	effectiveStrLvl = Math.floor(effectiveStrLvl);

	// Calculate max hit
	let maxHit = Math.floor((effectiveStrLvl * (gearStats.melee_strength + 64) + 320) / 640);

	// Make sure black mask only work on slayer task in future
	// Check if wearing salve amulet or salve amulet (e), if wearing salve amulet, black mask DOSEN'T STACK.
	if (
		(user.getGear('melee').hasEquipped(itemID('Salve amulet')) ||
			user.getGear('melee').hasEquipped(itemID('Salve amulet(i)'))) &&
		currentMonsterData.attributes.find(_attribue => _attribue === MonsterAttribute.Undead)
	) {
		maxHit *= 7 / 6;
	} else if (
		(user.getGear('melee').hasEquipped(itemID('Salve amulet (e)')) ||
			user.getGear('melee').hasEquipped(itemID('Salve amulet(ei)'))) &&
		currentMonsterData.attributes.find(_attribue => _attribue === MonsterAttribute.Undead)
	) {
		maxHit *= 1.2;
	} else if (user.getGear('melee').hasEquipped(itemID('Black mask'))) {
		maxHit *= 7 / 6;
	}

	maxHit = Math.floor(maxHit);

	for (const meleeStrengthBonus of meleeStrengthWeaponBonuses) {
		if (!user.getGear('melee').hasEquipped(meleeStrengthBonus.id)) {
			continue;
		}
		if (
			meleeStrengthBonus.againstAttribute &&
			currentMonsterData.attributes.find(_attribue => _attribue === meleeStrengthBonus.againstAttribute)
		) {
			maxHit *= meleeStrengthBonus.damageBoost;
			break;
		}
		if (meleeStrengthBonus.againstMonster) {
			for (const monst of meleeStrengthBonus.againstMonster) {
				if (monst === monster.name.toLowerCase()) {
					maxHit *= meleeStrengthBonus.damageBoost;
					break;
				}
			}
			break;
		}
		if (meleeStrengthBonus.wildernessBonus && monster.wildy) {
			maxHit *= meleeStrengthBonus.damageBoost;
			break;
		}
	}

	maxHit = Math.floor(maxHit);

	// Calculate effective attack level
	const [attackPotionBoost, attPotUsed] = potionBoostCalculator(user, SkillsEnum.Attack);

	let prayerAttackBonus = 1;
	for (const meleeAttackPrayerBonus of meleeAttackPrayerBonuses) {
		if (user.settings.get(UserSettings.SelectedPrayers).includes(meleeAttackPrayerBonus.name.toLowerCase())) {
			prayerAttackBonus = meleeAttackPrayerBonus.boost;
			break;
		}
	}
	let effectiveAttackLvl = Math.floor(user.skillLevel(SkillsEnum.Attack) + attackPotionBoost) * prayerAttackBonus + 8;

	if (attackStyle === 'accurate') {
		effectiveAttackLvl += 3;
	}
	if (attackStyle === 'controlled') {
		effectiveAttackLvl += 1;
	}

	// Multiply by void bonus if wearing full melee void
	if (hasMeleeVoidEquipped(meleeGear)) {
		effectiveAttackLvl *= 1.1;
	}

	effectiveAttackLvl = Math.floor(effectiveAttackLvl);

	// Calculate attack roll
	let attackRoll = 0;

	switch (combatType.toLowerCase()) {
		case 'stab':
			attackRoll = effectiveAttackLvl * (gearStats.attack_stab + 64);
			break;
		case 'slash':
			attackRoll = effectiveAttackLvl * (gearStats.attack_slash + 64);
			break;
		case 'crush':
			attackRoll = effectiveAttackLvl * (gearStats.attack_crush + 64);
			break;
	}

	// Make sure black mask only work on slayer task in future
	// Check if wearing salve amulet or salve amulet (e), if wearing salve amulet, black mask DOSEN'T STACK.
	if (
		(user.getGear('melee').hasEquipped(itemID('Salve amulet')) ||
			user.getGear('melee').hasEquipped(itemID('Salve amulet(i)'))) &&
		currentMonsterData.attributes.find(_attribue => _attribue === MonsterAttribute.Undead)
	) {
		attackRoll *= 7 / 6;
	} else if (
		(user.getGear('melee').hasEquipped(itemID('Salve amulet (e)')) ||
			user.getGear('melee').hasEquipped(itemID('Salve amulet(ei)'))) &&
		currentMonsterData.attributes.find(_attribue => _attribue === MonsterAttribute.Undead)
	) {
		attackRoll *= 1.2;
	} else if (user.getGear('melee').hasEquipped(itemID('Black mask'))) {
		attackRoll *= 7 / 6;
	}

	attackRoll = Math.floor(attackRoll);

	// Check if passive weapon accuracy.
	if (
		user.getGear('melee').hasEquipped(itemID('Arclight')) &&
		currentMonsterData.attributes.find(_attribue => _attribue === MonsterAttribute.Demon)
	) {
		attackRoll *= 1.7;
	} else if (
		user.getGear('melee').hasEquipped(itemID('Dragon hunter lance')) &&
		currentMonsterData.attributes.find(_attribue => _attribue === MonsterAttribute.Dragon)
	) {
		attackRoll *= 1.2;
	}

	// Reminder: Apply special attack accuracy here in future

	attackRoll = Math.floor(attackRoll);

	// Calculate Defence roll
	let defenceRoll = currentMonsterData.defenceLevel + 9;

	switch (combatType.toLowerCase()) {
		case 'stab':
			defenceRoll *= currentMonsterData.defenceStab + 64;
			break;
		case 'slash':
			defenceRoll *= currentMonsterData.defenceSlash + 64;
			break;
		case 'crush':
			defenceRoll *= currentMonsterData.defenceCrush + 64;
			break;
	}

	defenceRoll = Math.floor(defenceRoll);

	// Calculate hit chance
	let hitChance = 0;

	if (attackRoll > defenceRoll) {
		hitChance = 1 - (defenceRoll + 2) / (2 * (attackRoll + 1));
	} else {
		hitChance = attackRoll / (2 * (defenceRoll + 1));
	}

	// Calculate average damage per hit and dps
	const DamagePerHit = (maxHit * hitChance) / 2;
	const DPS = DamagePerHit / (meleeWeapon.weapon!.attack_speed * 0.6);

	// Calculates hits required, combat time and average monster kill speed.
	const monsterHP = currentMonsterData.hitpoints;

	const monsterKillSpeed = (monsterHP / DPS) * Time.Second;
	// If no quantity provided, set it to the max.
	if (!quantity || calcMaxTripLength(user, 'MonsterKilling') * 1.1 < Math.abs(monsterKillSpeed * 1.3 * quantity)) {
		quantity = Math.min(Math.floor(calcMaxTripLength(user, 'MonsterKilling') / (monsterKillSpeed * 1.3)), 5000);
		if (quantity < 1) quantity = 1;
	}
	let hits = 0;

	for (let i = 0; i < quantity; i++) {
		let hitpointsLeft = monsterHP;
		while (hitpointsLeft > 0 && hits < 1000) {
			let hitdamage = 0;
			if (Math.random() <= hitChance) {
				hitdamage = randInt(0, maxHit);
			}
			hitpointsLeft -= hitdamage;
			hits++;
		}
	}

	let combatDuration = hits * meleeWeapon.weapon!.attack_speed * 0.6 * Time.Second;

	combatDuration += monster.mechanicsTime ? monster.mechanicsTime * quantity : 0;

	combatDuration += monster.respawnTime ? monster.respawnTime * quantity : 0;

	combatDuration += (monster.bankTripTime! / monster.killsPerBankTrip!) * quantity;

	// Calculates prayer drain and removes enough prayer potion doses.
	await calculatePrayerDrain(user, monster, quantity, gearStats.prayer, monsterKillSpeed);

	return [combatDuration, hits, DPS, monsterKillSpeed, quantity, [strPotUsed, attPotUsed]];
}
