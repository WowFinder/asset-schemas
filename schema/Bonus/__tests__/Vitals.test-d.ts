import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { type RawVitals } from '..';

const fullVitals = {
    sleepTimeReduction: '2h',
    sleepCycleBonus: '12h',
    breathHoldingTimeBonus: '30s',
    breathRecoveryTimeReduction: '15s',
    maxHpBonus: 10,
    maxSanityBonus: 5,
};

const partialVitals = {
    sleepTimeReduction: '2h',
};

describe('Vitals', () => {
    it('should accept a full set of vitals', () => {
        expectAssignable<RawVitals>(fullVitals);
    });
    it('should *not* accept a partial set of vitals', () => {
        expectNotAssignable<RawVitals>(partialVitals);
    });
    it('should be usable with the Partial utility type', () => {
        expectAssignable<Partial<RawVitals>>(partialVitals);
    });
});