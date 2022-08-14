import { ArrayActions, KlasaUser } from 'klasa';

import { UserSettings } from '../../settings/types/UserSettings';
import { SkillsEnum } from './../../skilling/types';
import { CombatsEnum } from './trainCommand';

interface PrayerSimple {
	level: number;
	name: string;
	unlockable?: boolean;
}

const meleePrayerPrio: PrayerSimple[] = [
	{
		level: 70,
		name: 'Piety',
		unlockable: true
	},
	{
		level: 60,
		name: 'Chivalry',
		unlockable: true
	},
	{
		level: 31,
		name: 'Ultimate Strength'
	},
	{
		level: 13,
		name: 'Superhuman Strength'
	},
	{
		level: 4,
		name: 'Burst of Strength'
	}
];

const rangePrayerPrio: PrayerSimple[] = [
	{
		level: 74,
		name: 'Rigour',
		unlockable: true
	},
	{
		level: 44,
		name: 'Eagle Eye'
	},
	{
		level: 26,
		name: 'Hawk Eye'
	},
	{
		level: 8,
		name: 'Sharp Eye'
	}
];

const magePrayerPrio: PrayerSimple[] = [
	{
		level: 77,
		name: 'Augury',
		unlockable: true
	},
	{
		level: 45,
		name: 'Mystic Might'
	},
	{
		level: 27,
		name: 'Mystic Lore'
	},
	{
		level: 9,
		name: 'Mystic Will'
	}
];

export default async function autoPrayerPicker(user: KlasaUser, combatSkill: CombatsEnum) {
	if (combatSkill === CombatsEnum.Auto || combatSkill === CombatsEnum.NoCombat)
		throw 'Wrong input to autoPrayerPicker function';

	const unlockedPrayers = user.settings.get(UserSettings.UnlockedPrayers);
	const userPrayerLevel = user.skillLevel(SkillsEnum.Prayer);

	switch (combatSkill) {
		case CombatsEnum.Melee:
			for (const simplePrayer of meleePrayerPrio) {
				if (userPrayerLevel < simplePrayer.level) continue;
				if (simplePrayer.unlockable && !unlockedPrayers.includes(simplePrayer.name.toLowerCase())) continue;

				await user.settings.update(UserSettings.SelectedPrayers, simplePrayer.name.toLowerCase(), {
					arrayAction: ArrayActions.Overwrite
				});
				break;
			}
			break;
		case CombatsEnum.Ranged:
			for (const simplePrayer of rangePrayerPrio) {
				if (userPrayerLevel < simplePrayer.level) continue;
				if (simplePrayer.unlockable && !unlockedPrayers.includes(simplePrayer.name.toLowerCase())) continue;

				await user.settings.update(UserSettings.SelectedPrayers, simplePrayer.name.toLowerCase(), {
					arrayAction: ArrayActions.Overwrite
				});
				break;
			}
			break;
		case CombatsEnum.Magic:
			for (const simplePrayer of magePrayerPrio) {
				if (userPrayerLevel < simplePrayer.level) continue;
				if (simplePrayer.unlockable && !unlockedPrayers.includes(simplePrayer.name.toLowerCase())) continue;

				await user.settings.update(UserSettings.SelectedPrayers, simplePrayer.name.toLowerCase(), {
					arrayAction: ArrayActions.Overwrite
				});
				break;
			}
			break;
	}
}
