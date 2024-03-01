import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { RawRaceAsset } from '../Races';

const minimalRace = {
    key: 'minimal-test-race',
    size: 0,
    statMods: {
        STR: 0,
        DEX: 0,
        CON: 0,
        INT: 0,
        WIS: 0,
        CHA: 0,
    },
    initialLangs: ['common', 'low common'],
    additionalLangs: ['elvish', 'dwarvish'],
    commonAligns: ['LG', 'NG', 'CG', 'LN', 'NN', 'CN'],
    speeds: {
        base: 0,
    },
};

const fullRace = {
    ...minimalRace,
    key: 'ful-test-race',
    skillMods: {
        testSkill1: 1,
        testSkill2: 2,
    },
    bonusSkillRanks: 1,
    bonusStartingFeats: 1,
    saves: {
        fort: 0,
        refl: 0,
        will: 0,
    },
};

describe('RawRaceAsset', () => {
    it('should accept a minimal race asset', () => {
        expectAssignable<RawRaceAsset>(minimalRace);
    });
    it('should accept a full race asset', () => {
        expectAssignable<RawRaceAsset>(fullRace);
    });
    it('should not accept a race with missing key', () => {
        expectNotAssignable<RawRaceAsset>({
            ...minimalRace,
            key: undefined,
        });
    });
    it('should not accept a race with missing size', () => {
        expectNotAssignable<RawRaceAsset>({
            ...minimalRace,
            size: undefined,
        });
    });
    it('should not accept a race with missing statMods', () => {
        expectNotAssignable<RawRaceAsset>({
            ...minimalRace,
            statMods: undefined,
        });
    });
});
