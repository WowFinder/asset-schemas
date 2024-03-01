type SpellEntry = {
    spell: string;
    rank: number;
};
type SpellEntryCollection = {
    [key: string]: SpellEntry[];
    /* Mapped types like this don't work well with typescript-json-schema:
    [key in `${number}`]: SpellEntry[]; */
};
interface RawSpellListAsset {
    key: string;
    core?: boolean;
    spells: SpellEntryCollection;
}

export type { RawSpellListAsset, SpellEntry, SpellEntryCollection };
