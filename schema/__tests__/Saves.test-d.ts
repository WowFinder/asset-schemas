import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { Saves } from '../Saves';

const sampleSaves = {
    fort: 0,
    refl: 0,
    will: 0,
};

describe('Saves', () => {
    it('should accept a sample saves object', () => {
        expectAssignable<Saves>(sampleSaves);
    });
    it('should not accept a saves object with missing fort', () => {
        expectNotAssignable<Saves>({
            ...sampleSaves,
            fort: undefined,
        });
    });
    it('should not accept a saves object with missing refl', () => {
        expectNotAssignable<Saves>({
            ...sampleSaves,
            refl: undefined,
        });
    });
    it('should not accept a saves object with missing will', () => {
        expectNotAssignable<Saves>({
            ...sampleSaves,
            will: undefined,
        });
    });
});
