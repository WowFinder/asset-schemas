import {
    type Alignment,
    type Languages,
    type Skill,
    type InnateTrait,
} from '@wowfinder/ts-enums';
import {
    type RawSaves,
    type RawSpeeds,
    type RawStats,
    type RawResistances,
    type RawVitals,
} from './Bonus';

interface RawRaceAsset {
    key: string;
    racialPoints: number; // See Advanced Race Guide (p. 214)
    size: number;
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
    vitals?: Partial<RawVitals>;
    traits?: InnateTrait[];
}

export type { RawRaceAsset };
