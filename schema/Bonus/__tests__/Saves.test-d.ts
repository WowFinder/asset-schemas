import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { Saves } from '..';

const sampleSaves = {
    fortitude: 0,
    reflexes: 0,
    will: 0,
};

describe('Saves', () => {
    it('should accept a sample saves object', () => {
        expectAssignable<Saves>(sampleSaves);
    });
    it('should not accept a saves object with missing fortitude', () => {
        expectNotAssignable<Saves>({
            ...sampleSaves,
            fortitude: undefined,
        });
    });
    it('should not accept a saves object with missing reflexes', () => {
        expectNotAssignable<Saves>({
            ...sampleSaves,
            reflexes: undefined,
        });
    });
    it('should not accept a saves object with missing will', () => {
        expectNotAssignable<Saves>({
            ...sampleSaves,
            will: undefined,
        });
    });
    it('should be usable with the Partial utility type', () => {
        expectAssignable<Partial<Saves>>({});
    });
});
