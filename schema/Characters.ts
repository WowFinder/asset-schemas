import { Stats } from './Bonus';
import { Skill } from '@wowfinder/ts-enums';

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
    baseStats?: Stats; // TODO: make required (must add default values to existing assets!)
    race: string; // Must match a race key
    active?: boolean; // Default: true
    classes?: {
        // Default: [] (empty array)
        cls: string; // Must match a class key
        level: number;
    }[];
    skillRanks?: { [key in Skill]?: number }; // Keys must match skill keys
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
