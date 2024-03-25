import { ClassTier, Skill, Aura, CastingMode, Save } from '@wowfinder/ts-enums';

type RawBasicClassFeatureEntry = {
    level: number;
    feature: string;
};
type RawClassAuraEntry = {
    level: number;
    aura: Aura;
};
type RawClassFeatureEntry = RawBasicClassFeatureEntry | RawClassAuraEntry;

interface RawClassAsset {
    key: string;
    tier: ClassTier;
    maxLevel: number;
    hitDie: number;
    baseAttackProgression: number;
    skillRanks: number;
    goodSaves?: {
        [key in Save]?: boolean;
    };
    spellCasting?: {
        [key in CastingMode]?: number;
    };
    list?: string; // Must match a spell list key
    startingWealth: number;
    skills: Skill[];
    features: RawClassFeatureEntry[];
}

export type { RawClassAsset, RawClassFeatureEntry };
