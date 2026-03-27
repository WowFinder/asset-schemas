import {
    type Alignment,
    type Languages,
    type Skill,
    type InnateTrait,
    type Shape,
} from '@wowfinder/ts-enums';
import {
    type RawSaves,
    type RawSpeeds,
    type RawStats,
    type RawResistances,
} from './Bonus';
import { type RawBaseVitals } from './Creature/BaseVitals';

interface RawRaceAsset {
    key: string;
    racialPoints: number; // See Advanced Race Guide (p. 214)
    size: number;
    // Default to humanoid shape for backwards compatibility
    shape?: Shape;
    statMods: RawStats;
    skillMods?: { [key in Skill]?: number };
    bonusSkillRanks?: number;
    bonusStartingFeats?: number;
    initialLanguages: Languages[];
    additionalLanguages: Languages[];
    commonAlignments: Alignment[];
    speeds: RawSpeeds;
    saves?: RawSaves;
    resistances?: Partial<RawResistances>;
    vitals?: RawBaseVitals;
    traits?: InnateTrait[];
}

export type { RawRaceAsset };
