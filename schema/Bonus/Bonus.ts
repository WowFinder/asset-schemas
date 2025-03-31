import { DamageType, Save, Skill, Stat } from '@wowfinder/ts-enums';
import type { RawSpellPower } from './SpellPower';

type RawResistances = {
    [key in DamageType]: number;
};

type RawSaves = {
    [key in Save]: number;
};

type RawStats = {
    [key in Stat]: number;
};

type RawSkills = {
    [key in Skill]: number;
};

interface RawBonus {
    armorClass?: number;
    stats?: Partial<RawStats>;
    spellPower?: RawSpellPower;
    skills?: Partial<RawSkills>;
    resistances?: Partial<RawResistances>;
    saves?: Partial<RawSaves>;
}

export type { RawBonus, RawResistances, RawSaves, RawSkills, RawStats };
