import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { RawSpeeds } from '..';

const minimalSpeeds = {
    base: 0,
};

const fullSpeeds = {
    ...minimalSpeeds,
    swim: 0,
    climb: 0,
    burrow: 0,
    fly: 0,
    maneuverability: 'clumsy',
};

describe('Speeds', () => {
    it('should accept a minimal speeds object', () => {
        expectAssignable<RawSpeeds>(minimalSpeeds);
    });
    it('should accept a full speeds object', () => {
        expectAssignable<RawSpeeds>(fullSpeeds);
    });
    it('should not accept a speeds object with missing base', () => {
        expectNotAssignable<RawSpeeds>({
            ...minimalSpeeds,
            base: undefined,
        });
    });
});
