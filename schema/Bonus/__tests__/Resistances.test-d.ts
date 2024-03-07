import type { Resistances } from '..';
import { expectAssignable, expectNotAssignable } from 'jest-tsd';

describe('Resistances', () => {
    it('should accept a full set of resistances', () => {
        expectAssignable<Resistances>({
            bludgeoning: 10,
            piercing: 10,
            slashing: 10,
            arcane: 10,
            cold: 10,
            fire: 10,
            nature: 10,
            holy: 10,
            shadow: 10,
            psychic: 10,
        });
    });
    it('should *not* accept a partial set of resistances', () => {
        expectNotAssignable<Resistances>({
            arcane: 10,
        });
    });
    it('should be usable with the Partial utility type', () => {
        expectAssignable<Partial<Resistances>>({
            arcane: 10,
        });
    });
});
