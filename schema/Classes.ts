import { ClassTier, Skill, Aura, CastingMode, Save } from '@wowfinder/ts-enums';

type BasicClassFeatureEntry = {
    level: number;
    feature: string;
};
type ClassAuraEntry = {
    level: number;
    aura: Aura;
};
type ClassFeatureEntry = BasicClassFeatureEntry | ClassAuraEntry;

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
    features: ClassFeatureEntry[];
}

export type { RawClassAsset };
