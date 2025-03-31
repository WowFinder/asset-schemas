import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import type { RawFactionAsset } from '../Factions';

const sampleFaction = {
    key: 0,
    label: 'sample',
    name: 'Sample Faction',
};

describe('RawFactionAsset', () => {
    it('should accept a sample faction', () => {
        expectAssignable<RawFactionAsset>(sampleFaction);
    });
    it('should not accept a faction with missing key', () => {
        expectNotAssignable<RawFactionAsset>({
            ...sampleFaction,
            key: undefined,
        });
    });
    it('should not accept a faction with missing label', () => {
        expectNotAssignable<RawFactionAsset>({
            ...sampleFaction,
            label: undefined,
        });
    });
    it('should not accept a faction with missing name', () => {
        expectNotAssignable<RawFactionAsset>({
            ...sampleFaction,
            name: undefined,
        });
    });
});
