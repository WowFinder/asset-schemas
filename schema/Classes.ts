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
    tier: 'base' | 'prestige';
    maxLevel: 1 | 5 | 10 | 20;
    hd: 6 | 8 | 10 | 12;
    bab: 0.5 | 0.75 | 1;
    skl: number;
    fort?: boolean;
    refl?: boolean;
    will?: boolean;
    arc?: number;
    div?: number;
    esp?: number;
    list?: 'arcane' | 'arts' | 'divine' | 'occult' | 'primal';
    wealth: number;
    skills: string[];
    features: ClassFeatureEntry[];
}
