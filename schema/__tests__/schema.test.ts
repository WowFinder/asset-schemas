import { expectTypeTestsToPassAsync } from 'jest-tsd';
import { join, resolve } from 'path';

type AssetsDir = { dirName: string; assets: Assets };
type Assets = (string | AssetsDir)[];

const testableTypes: Assets = [
    'Adventure',
    'Class',
    'Faction',
    'Race',
    {
        dirName: 'Bonus',
        assets: [
            'Resistances',
            'Saves',
            'Skills',
            'Speeds',
            'SpellPower',
            'Stats',
        ],
    },
];
function testAssetType(fullPath: string, assetTypeName: string): void {
    it(`should pass static type tests for ${assetTypeName}`, async () => {
        await expectTypeTestsToPassAsync(fullPath);
    });
}
function testAssetDir(
    baseDir: string,
    parentPath: string,
    dirName: string,
    entries: Assets,
): void {
    for (const entry of entries) {
        describe(`${dirName}: ${entry}`, () => {
            if (typeof entry === 'string') {
                const fullPath = resolve(
                    baseDir,
                    parentPath,
                    dirName,
                    '__tests__',
                    `${entry}.test-d.ts`,
                );
                testAssetType(fullPath, entry);
            } else {
                testAssetDir(
                    baseDir,
                    join(parentPath, dirName),
                    entry.dirName,
                    entry.assets,
                );
            }
        });
    }
}
describe('should pass static type tests', () => {
    const baseDir = resolve(__dirname, '..');
    testAssetDir(baseDir, '.', '.', testableTypes);
});
describe('.setup.ts', () => {
    it('should run the module', async () => {
        const setup = await require('../.setup');
        expect(setup).toBeDefined();
        expect(setup.cleanup).not.toThrow();
    });
});
