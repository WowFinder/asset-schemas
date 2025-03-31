type RawSpellEntry = {
    spell: string;
    rank: number;
};
type RawSpellEntryCollection = {
    [key: string]: RawSpellEntry[];
    /* Mapped types like this don't work well with typescript-json-schema:
    [key in `${number}`]: SpellEntry[]; */
};
interface RawSpellListAsset {
    key: string;
    core?: boolean;
    spells: RawSpellEntryCollection;
}

export type { RawSpellListAsset, RawSpellEntry, RawSpellEntryCollection };
