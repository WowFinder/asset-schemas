import { testAssetsDir } from './base';
import {
    assertDateString,
    assertObject,
    assertProperty,
    assertString,
} from './helpers';

const DirName = 'Adventures';

function testAdventure(raw: unknown, fileref?: string): asserts raw is any {
    const filesuffix = fileref ? ` (${fileref})` : '';
    test(`Adventure ${filesuffix}`, () => {
        assertProperty(raw, 'key', 'Invalid adventure key', assertString);
        assertProperty(raw, 'title', 'Invalid adventure title', assertString);
        assertProperty(raw, 'date', 'Invalid adventure date', assertDateString);
        assertProperty(
            raw,
            'rewards',
            'Invalid adventure rewards',
            assertObject,
        );
    });
}

describe('Adventures', () => {
    testAssetsDir(DirName, testAdventure);
});
