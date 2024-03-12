import { RawCreatureAsset } from './base';

interface RawMobAsset extends RawCreatureAsset {
    templates: string[]; // Must match a template key
}

export type { RawMobAsset };
