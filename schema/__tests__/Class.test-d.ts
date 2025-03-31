import { Aura, ClassTier, Skill } from '@wowfinder/ts-enums';
import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import type { RawClassAsset } from '../Classes';

const minimalClass = {
    key: 'sampleClass',
    tier: ClassTier.base,
    maxLevel: 1,
    hitDie: 6,
    baseAttackProgression: 0.5,
    skillRanks: 0,
    startingWealth: 0,
    skills: [],
    features: [],
};
const fullClass = {
    key: 'sampleClass',
    tier: ClassTier.prestige,
    maxLevel: 20,
    hitDie: 12,
    baseAttackProgression: 1,
    skillRanks: 12,
    startingWealth: 999999,
    skills: [Skill.acrobatics, Skill.alchemy, Skill.perception],
    features: [
        {
            level: 1,
            feature: 'sampleFeature1',
        },
        {
            level: 3,
            feature: 'sampleFeature2',
        },
        {
            level: 5,
            feature: 'sampleFeature3',
        },
        {
            level: 6,
            aura: Aura.commanding,
        },
        {
            level: 10,
            aura: Aura.commanding,
        },
    ],
};

describe('RawClassAsset', () => {
    it('should accept a minimal class', () => {
        expectAssignable<RawClassAsset>(minimalClass);
    });
    it('should accept a full class', () => {
        expectAssignable<RawClassAsset>(fullClass);
    });
    it('should not accept a class with missing key', () => {
        expectNotAssignable<RawClassAsset>({ ...minimalClass, key: undefined });
    });
    it('should not accept a class with missing tier', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            tier: undefined,
        });
    });
    it('should not accept a class with missing maxLevel', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            maxLevel: undefined,
        });
    });
    it('should not accept a class with missing hitDie', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            hitDie: undefined,
        });
    });
    it('should not accept a class with missing BaB', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            baseAttackProgression: undefined,
        });
    });
    it('should not accept a class with missing skillRanks', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            skillRanks: undefined,
        });
    });
    it('should not accept a class with unknown properties', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            unknown: 'unknown',
        });
        expectNotAssignable<RawClassAsset>({
            ...fullClass,
            unknown2: 'yolo',
        });
        expectNotAssignable<RawClassAsset>({
            ...fullClass,
            ...minimalClass,
            unknown3: 'whatever',
        });
    });
});
