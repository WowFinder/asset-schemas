import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { RawSaves } from '..';

const sampleSaves = {
    fortitude: 0,
    reflexes: 0,
    will: 0,
};

describe('Saves', () => {
    it('should accept a sample saves object', () => {
        expectAssignable<RawSaves>(sampleSaves);
    });
    it('should not accept a saves object with missing fortitude', () => {
        expectNotAssignable<RawSaves>({
            ...sampleSaves,
            fortitude: undefined,
        });
    });
    it('should not accept a saves object with missing reflexes', () => {
        expectNotAssignable<RawSaves>({
            ...sampleSaves,
            reflexes: undefined,
        });
    });
    it('should not accept a saves object with missing will', () => {
        expectNotAssignable<RawSaves>({
            ...sampleSaves,
            will: undefined,
        });
    });
    it('should be usable with the Partial utility type', () => {
        expectAssignable<Partial<RawSaves>>({});
    });
});
