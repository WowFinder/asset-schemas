type RawRewardEntries = { [key: string]: number };
type RawRewards = { [key: string]: RawRewardEntries };
interface RawAdventureAsset {
    key: string;
    title: string;
    date: string; // ISO 8601 date
    rewards: RawRewards;
}

export type { RawAdventureAsset, RawRewardEntries, RawRewards };
