import { Stats } from './Stats';

interface RawCharacterAsset {
    key: string;
    notes?: string;
    personal: {
        fullName: string;
        align?: 'LG' | 'NG' | 'CG' | 'LN' | 'NN' | 'CN' | 'LE' | 'NE' | 'CE';
        height?: number; // In inches
        weight?: number; // In pounds
        age?: number; // In Azeroth years
        faith?: string;
        origin?: string;
        hair?: string;
        eyes?: string;
        skin?: string;
        gender?: string;
    };
    baseStats?: Stats;
    race: string; // Must match a race key
    active?: boolean; // Default: true
    classes?: {
        cls: string; // Must match a class key
        level: number;
    }[];
    skillRanks?: { [key: string]: number }; // Keys must match skill keys
    feats?: {
        feat: string; // Must match a feat key
        class?: string; // Must match a class key
        level: number;
    }[];
    inventory?: {
        money?: number; // In copper pieces
        gear: string[]; // Must match qualified item keys
    };
}

export type { RawCharacterAsset };
