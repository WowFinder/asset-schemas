type RewardEntries = { [key: string]: number };
type Rewards = { [key: string]: RewardEntries };
interface RawAdventureAsset {
    key: string;
    title: string;
    date: string; // ISO 8601 date
    rewards: Rewards;
}

export type { RawAdventureAsset, RewardEntries, Rewards };
