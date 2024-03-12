import { Skills } from '../Bonus';
import { RawCreatureAsset } from './base';
import { CharacterPersonal } from './personal';

interface RawCharacterAsset extends RawCreatureAsset {
    personal: CharacterPersonal;
    active?: boolean; // Default: true
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
