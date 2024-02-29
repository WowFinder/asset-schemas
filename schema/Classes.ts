type BasicClassFeatureEntry = {
    level: number;
    feature: string;
};
type ClassAuraEntry = {
    level: number;
    aura: string;
};
type ClassFeatureEntry = BasicClassFeatureEntry | ClassAuraEntry;

interface RawClassAsset {
    key: string;
    tier: string;
    maxLevel: number;
    hd: number;
    bab: number;
    skl: number;
    fort?: boolean;
    refl?: boolean;
    will?: boolean;
    arc?: number;
    div?: number;
    esp?: number;
    list?: string;
    wealth: number;
    skills: string[];
    features: ClassFeatureEntry[];
}

export type { RawClassAsset };
