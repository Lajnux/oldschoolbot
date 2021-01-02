import LootTable from 'oldschooljs/dist/structures/LootTable';

import { resolveNameBank } from '../../../../util';
import { Creature } from '../../../types';

const trackingCreatures: Creature[] = [
	{
		name: `Polar kebbit`,
		aliases: ['polar kebbit'],
		level: 1,
		hunterXp: 30,
		itemsRequired: resolveNameBank({ 'Noose wand': 1 }),
		table: new LootTable().every('Bones').every('Polar kebbit fur').every('Raw beast meat'),
		huntTechnique: 'tracking',
		catchTime: 0
	},
	{
		name: `Common kebbit`,
		aliases: ['common kebbit'],
		level: 3,
		hunterXp: 36,
		itemsRequired: resolveNameBank({ 'Noose wand': 1 }),
		table: new LootTable().every('Bones').every('Common kebbit fur').every('Raw beast meat'),
		huntTechnique: 'tracking',
		catchTime: 0
	},
	{
		name: `Feldip weasel`,
		aliases: ['feldip weasel'],
		level: 7,
		hunterXp: 48,
		itemsRequired: resolveNameBank({ 'Noose wand': 1 }),
		table: new LootTable().every('Bones').every('Feldip weasel fur').every('Raw beast meat'),
		huntTechnique: 'tracking',
		catchTime: 0
	},
	{
		name: `Desert devil`,
		aliases: ['desert devil'],
		level: 13,
		hunterXp: 66,
		itemsRequired: resolveNameBank({ 'Noose wand': 1 }),
		table: new LootTable().every('Bones').every('Desert devil fur').every('Raw beast meat'),
		huntTechnique: 'tracking',
		catchTime: 0
	},
	{
		name: `Razor-backed kebbit`,
		aliases: ['razor-backed kebbit', 'razor kebbit'],
		level: 49,
		hunterXp: 348.5,
		itemsRequired: resolveNameBank({ 'Noose wand': 1 }),
		table: new LootTable().every('Bones').every('Long kebbit spike').every('Raw beast meat'),
		huntTechnique: 'tracking',
		catchTime: 0
	},
	{
		name: `Herbiboar`,
		aliases: ['herbiboar'],
		level: 80,
		hunterXp: 1950, // Scaleable xp depending on hunting lvl
		itemsRequired: resolveNameBank({ 'Magic secateurs': 1 }),
		table: new LootTable().tertiary(6500, 'Herbi') /* Scaleable loot table */,
		huntTechnique: 'tracking',
		catchTime: 0
	}
];

export default trackingCreatures;