import { DamageType, Save, Skill, Stat } from '@wowfinder/ts-enums';
import { RawSpellPower } from './SpellPower';

type Resistances = {
    [key in DamageType]: number;
};

type Saves = {
    [key in Save]: number;
};

type Stats = {
    [key in Stat]: number;
};

type Skills = {
    [key in Skill]: number;
};

interface RawBonus {
    armorClass?: number;
    stats?: Partial<Stats>;
    spellPower?: RawSpellPower;
    skills?: Partial<Skills>;
    resistances?: Partial<Resistances>;
    saves?: Partial<Saves>;
}

export type { RawBonus, Resistances, Saves, Skills, Stats };
