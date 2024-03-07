import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import type { Stats } from '..';

const fullStats = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
};

const partialStats = {
    strength: 10,
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
