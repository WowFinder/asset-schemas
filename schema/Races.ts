import { Alignment, Languages, Skill } from '@wowfinder/ts-enums';
import { Saves, Speeds, Stats } from 'Bonus';

interface RawRaceAsset {
    key: string;
    racialPoints: number; // See Advanced Race Guide (p. 214)
    size: number;
    statMods: Stats;
    skillMods?: { [key in Skill]?: number };
    bonusSkillRanks?: number;
    bonusStartingFeats?: number;
    initialLanguages: Languages[];
    additionalLanguages: Languages[];
    commonAlignments: Alignment[];
    speeds: Speeds;
    saves?: Saves;
}

export type { RawRaceAsset };
