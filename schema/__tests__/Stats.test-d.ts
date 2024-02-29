import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import type { Stats, PartialStats } from '../Stats';

const fullStats = {
    STR: 10,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10,
};

const partialStats = {
    STR: 10,
};

describe('Stats', () => {
    it('should accept a full set of stats', () => {
        expectAssignable<Stats>(fullStats);
    });
    it('should *not* accept a partial set of stats', () => {
        expectNotAssignable<Stats>(partialStats);
    });
});

describe('PartialStats', () => {
    it('should accept a full set of stats', () => {
        expectAssignable<PartialStats>(fullStats);
    });
    it('should accept a partial set of stats', () => {
        expectAssignable<PartialStats>(partialStats);
    });
});
