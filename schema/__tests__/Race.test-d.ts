import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { Alignment, Languages, Skill } from '@wowfinder/ts-enums';
import { RawRaceAsset } from '../Races';

const minimalRace = {
    key: 'minimal-test-race',
    size: 0,
    racialPoints: 10,
    statMods: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    initialLanguages: [Languages.common],
    additionalLanguages: [Languages.darnassian, Languages.dwarven],
    commonAlignments: [
        Alignment.lawfulGood,
        Alignment.lawfulNeutral,
        Alignment.neutralGood,
        Alignment.neutralNeutral,
        Alignment.chaoticGood,
        Alignment.chaoticNeutral,
    ],
    speeds: {
        base: 0,
    },
};

const fullRace = {
    ...minimalRace,
    key: 'full-test-race',
    skillMods: {
        [Skill.acrobatics]: 1,
        [Skill.stealth]: 2,
    },
    bonusSkillRanks: 1,
    bonusStartingFeats: 1,
    saves: {
        fortitude: 0,
        reflexes: 0,
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
