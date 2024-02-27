import { slurpAssetsDir } from './base';
import {
    assertDateString,
    assertObject,
    assertProperty,
    assertString,
} from './helpers';

const DirName = 'Adventures';

function testAdventure(raw: unknown): asserts raw is any {
    assertProperty(raw, 'key', 'Invalid adventure key', assertString);
    assertProperty(raw, 'title', 'Invalid adventure title', assertString);
    assertProperty(raw, 'date', 'Invalid adventure date', assertDateString);
    assertProperty(raw, 'rewards', 'Invalid adventure rewards', assertObject);
    // TODO: Validate format of `rewards` entries
}

describe('Adventures', () => {
    for (const entry of slurpAssetsDir(DirName)) {
        it(`Adventure ${entry.fileBaseName}`, () => {
            testAdventure(entry.payload);
        });
    }
});
