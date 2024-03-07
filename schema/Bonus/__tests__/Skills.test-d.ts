import { Skill } from '@wowfinder/ts-enums';
import { Skills } from '..';
import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { mockSkills } from './mocks/Skills';

describe('Skills', () => {
    it('should accept a full set of skills', () => {
        expectAssignable<Skills>(mockSkills(10));
    });
    it('should *not* accept a partial set of skills', () => {
        expectNotAssignable<Skills>({
            [Skill.arcane]: 10,
        });
    });
    it('should be usable with the Partial utility type', () => {
        expectAssignable<Partial<Skills>>({
            [Skill.arcane]: 10,
        });
    });
});
