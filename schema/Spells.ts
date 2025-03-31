import { SpellDescriptor, SpellFlag } from '@wowfinder/ts-enums';

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
    school: string;
    components: string[];
    save?: any;
    flags?: SpellFlag[];
    descriptors?: SpellDescriptor[];
}

export type { RawSpellBase, RawSpellAsset, RawSpellRank };
