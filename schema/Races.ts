import { Alignment, Languages } from '@wowfinder/ts-enums';
import { Saves, Speeds, Stats } from 'Bonus';

interface RawRaceAsset {
    key: string;
    size: number;
    statMods: Stats;
    skillMods?: { [key: string]: number };
    bonusSkillRanks?: number;
    bonusStartingFeats?: number;
    initialLangs: Languages[];
    additionalLangs: Languages[];
    commonAlignments: Alignment[];
    speeds: Speeds;
    saves?: Saves;
}

export type { RawRaceAsset };
