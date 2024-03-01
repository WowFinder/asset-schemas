import { expectTypeTestsToPassAsync } from 'jest-tsd';
import { resolve } from 'path';

const testableTypes = [
    'Adventure',
    'Class',
    'Faction',
    'Race',
    'Saves',
    'Speeds',
    'Stats',
];
describe('should pass static type tests', () => {
    for (const t of testableTypes) {
        it(`Asset type ${t} should validate`, async () => {
            await expectTypeTestsToPassAsync(
                resolve(__dirname, `${t}.test-d.ts`),
            );
        });
    }
});
