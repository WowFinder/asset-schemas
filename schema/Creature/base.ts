import { Skills, Stats } from 'Bonus';
import { RawPersonalDetails } from './personal';

type RawClassEntry = {
    class: string; // Must match a class key
    level: number;
};

type RawClassEntries = RawClassEntry[];

type RawFeatSelection = {
    feat: string; // Must match a feat key
    class?: string; // Must match a class key --or-- be `undefined`
    level: number;
};

type RawFeatSelections = RawFeatSelection[];

type RawItems = string[]; // Must match qualified item keys

type RawInventory = {
    /** Default: 0 */
    money?: number; // In copper pieces
    /** Default: [] (empty array) */
    gear?: RawItems;
    /** Default: [] (empty array) */
    carried?: RawItems;
};

interface RawCreatureAsset {
    key: string;
    baseStats: Stats;
    race: string; // Must match a race key
    /** Default: empty string */
    notes?: string;
    personal: RawPersonalDetails;
    /** Default: [] (empty array) */
    classes?: RawClassEntries;
    /** Default: {} (empty object) */
    skillRanks?: Partial<Skills>;
    /** Default: [] (empty array) */
    feats?: RawFeatSelections;
    /** Default: {} (empty object) */
    inventory?: RawInventory;
}

export type { RawCreatureAsset };
