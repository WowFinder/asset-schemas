import { Alignment, Languages, Skill } from '@wowfinder/ts-enums';
import { RawSaves, RawSpeeds, RawStats } from 'Bonus';

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
}

export type { RawRaceAsset };
