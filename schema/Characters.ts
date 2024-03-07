import { Skills, Stats } from './Bonus';
import { Alignment } from '@wowfinder/ts-enums';

interface RawCharacterAsset {
    key: string;
    notes?: string;
    personal: {
        fullName: string;
        alignment?: Alignment; // Default: `Alignment.neutralNeutral`
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
    baseStats: Stats;
    race: string; // Must match a race key
    active?: boolean; // Default: true
    classes?: {
        // Default: [] (empty array)
        class: string; // Must match a class key
        level: number;
    }[];
    skillRanks?: Partial<Skills>; // Default: {} (empty object)
    feats?: {
        // Default: [] (empty array)
        feat: string; // Must match a feat key
        class?: string; // Must match a class key --or-- be `undefined`
        level: number;
    }[];
    inventory?: {
        // Default: {} (empty object, see defaults for sub-properties)
        money?: number; // In copper pieces (default: 0)
        gear?: string[]; // Must match qualified item keys (default: [])
    };
}

export type { RawCharacterAsset };
