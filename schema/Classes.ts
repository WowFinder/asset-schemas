import { ClassTier, Skill, Aura } from '@wowfinder/ts-enums';

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
    hd: number;
    bab: number;
    skillRanks: number;
    goodFortitude?: boolean;
    goodReflexes?: boolean;
    goodWill?: boolean;
    arcane?: number;
    divine?: number;
    spontaneous?: number;
    list?: string; // Must match a spell list key
    startingWealth: number;
    skills: Skill[];
    features: ClassFeatureEntry[];
}

export type { RawClassAsset };
