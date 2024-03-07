interface RawSpellBase {
    range?: string;
    duration?: string;
    castingTime?: string;
    area?: string;
    target?: any;
    trigger?: any;
}

interface RawSpellRank extends RawSpellBase {
    rank: number;
    damage?: any;
    dot?: any;
    heal?: any;
}

interface RawSpellAsset extends RawSpellBase {
    key: string;
    ranks: RawSpellRank[];
    sch: string;
    components: string[];
    save?: any;
    flags?: string[];
    descriptors?: string[];
}

export type { RawSpellBase, RawSpellAsset, RawSpellRank };
