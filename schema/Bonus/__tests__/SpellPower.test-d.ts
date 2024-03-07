import { RawSpellPower } from '..';
import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import {
    mockCastingModes,
    mockSchools,
    mockSubSchools,
} from './mocks/SpellPower';

describe('Skills', () => {
    it('should accept a full set of spellPower values', () => {
        expectAssignable<RawSpellPower>({
            ...mockSchools(10),
            ...mockSubSchools(10),
            ...mockCastingModes(10),
        });
    });
    it('should accept an empty set', () => {
        expectAssignable<RawSpellPower>({});
    });
    it('should *not* accept unknown keys', () => {
        expectNotAssignable<RawSpellPower>({
            unknown: 10,
        });
    });
});
