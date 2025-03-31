import { Skill } from '@wowfinder/ts-enums';
import type { RawSkills } from '..';
import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { mockSkills } from './mocks/Skills';

describe('Skills', () => {
    it('should accept a full set of skills', () => {
        expectAssignable<RawSkills>(mockSkills(10));
    });
    it('should *not* accept a partial set of skills', () => {
        expectNotAssignable<RawSkills>({
            [Skill.arcane]: 10,
        });
    });
    it('should be usable with the Partial utility type', () => {
        expectAssignable<Partial<RawSkills>>({
            [Skill.arcane]: 10,
        });
    });
});
