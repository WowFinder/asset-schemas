import { Saves, Speeds, Stats } from 'Bonus';

interface RawRaceAsset {
    key: string;
    size: number;
    statMods: Stats;
    skillMods?: { [key: string]: number };
    bonusSkillRanks?: number;
    bonusStartingFeats?: number;
    initialLangs: string[];
    additionalLangs: string[];
    commonAligns: string[];
    speeds: Speeds;
    saves?: Saves;
}

export type { RawRaceAsset };
