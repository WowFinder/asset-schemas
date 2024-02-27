import { slurpAssetsDir } from './base';
import { assertObject, assertProperty, assertString } from './helpers';

const DirName = 'Characters';

function testCharacter(raw: unknown): asserts raw is any {
    assertProperty(raw, 'key', 'Invalid character key', assertString);
    assertProperty(raw, 'personal', 'Invalid character personal', assertObject);
    assertProperty(
        raw.personal,
        'fullName',
        'Invalid character full name',
        assertString,
    );
    /* Pending - not fully supported:
        assertProperty(raw, 'race', 'Invalid character race', assertString); */
}

describe('Characters', () => {
    for (const entry of slurpAssetsDir(DirName)) {
        test(`Character ${entry.fileBaseName}`, () => {
            expect(() => testCharacter(entry.payload)).not.toThrow();
        });
    }
});
