import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import type { Stats } from '..';

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
    it('should be usable with the Partial utility type', () => {
        expectAssignable<Partial<Stats>>(partialStats);
    });
});
