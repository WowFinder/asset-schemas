import type { RawCreatureAsset } from './base';

interface RawCharacterAsset extends RawCreatureAsset {
    /** Default: true */
    active?: boolean;
}

export type { RawCharacterAsset };
