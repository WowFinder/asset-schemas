import { faker } from '@faker-js/faker';
import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { RawAdventureAsset, RewardEntries, Rewards } from '../Adventures';

const minimalAdventure = {
    key: 'minimalAdventure',
    title: 'Minimal Adventure',
    date: '1899-12-30',
    rewards: {},
};
const randomRewardEntries = (): RewardEntries => {
    const result: RewardEntries = {};
    const count = faker.number.int({ min: 3, max: 20 });
    for (let i = 0; i < count; i++) {
        result[faker.string.symbol()] = faker.number.int();
    }
    return result;
};
const randomRewards = (): Rewards => {
    const result: Rewards = {};
    const count = faker.number.int({ min: 3, max: 20 });
    for (let i = 0; i < count; i++) {
        result[faker.string.symbol()] = randomRewardEntries();
    }
    return result;
};

describe('RawAdventureAsset', () => {
    it('should accept a minimal adventure', () => {
        expectAssignable<RawAdventureAsset>(minimalAdventure);
    });
    it('should accept a full adventure', () => {
        expectAssignable<RawAdventureAsset>({
            ...minimalAdventure,
            rewards: randomRewards(),
        });
    });
    it('should not accept an adventure with missing key', () => {
        expectNotAssignable<RawAdventureAsset>({
            ...minimalAdventure,
            key: undefined,
        });
    });
    it('should not accept an adventure with missing title', () => {
        expectNotAssignable<RawAdventureAsset>({
            ...minimalAdventure,
            title: undefined,
        });
    });
    it('should not accept an adventure with missing date', () => {
        expectNotAssignable<RawAdventureAsset>({
            ...minimalAdventure,
            date: undefined,
        });
    });
    it('should not accept an adventure with missing rewards', () => {
        expectNotAssignable<RawAdventureAsset>({
            ...minimalAdventure,
            rewards: undefined,
        });
    });
});
