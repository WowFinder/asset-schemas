import { Saves } from 'Saves';
import { Speeds } from 'Speeds';
import { Stats } from 'Stats';

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
