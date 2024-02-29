interface RawAdventureAsset {
    key: string;
    title: string;
    date: string; // ISO 8601 date
    rewards: {
        [key: string]: {
            // Must map to a character key
            [key: string]: number; // Must be 'XP' or map to a faction key
        };
    };
}

export type { RawAdventureAsset };
