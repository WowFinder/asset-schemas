import { Stats } from 'Bonus';
import { BaseCreaturePersonal } from './personal';

interface RawCreatureAsset {
    key: string;
    baseStats: Stats;
    race: string; // Must match a race key
    notes?: string;
    personal: BaseCreaturePersonal;
    classes?: {
        // Default: [] (empty array)
        class: string; // Must match a class key
        level: number;
    }[];
}

export type { RawCreatureAsset };
