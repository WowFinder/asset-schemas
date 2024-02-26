import { readFileSync, readdirSync } from 'fs';
import JSON5 from 'json5';
import path from 'path';

type ObjectTester<T = unknown> = (
    obj: any,
    fileref?: string,
) => asserts obj is T;

function testFile<T>(fpath: string, test: ObjectTester<T>): void {
    const content = readFileSync(fpath, 'utf8');
    const obj = JSON5.parse(content);
    test(obj, path.basename(fpath, '.json5'));
}

function checkFile<T>(path: string, test: ObjectTester<T>): Error | null {
    try {
        testFile(path, test);
        return null;
    } catch (e) {
        return e as Error;
    }
}

function testDir<T>(dir: string, test: ObjectTester<T>): void {
    const files = readdirSync(dir).filter(f => f.endsWith('.json5'));
    for (const file of files) {
        const filePath = `${dir}/${file}`;
        testFile(filePath, test);
    }
}

function getAssetsPath(subpath?: string): string {
    return path.join(path.resolve(__dirname, '..'), subpath ?? '');
}

function testAssetsDir(subpath: string, test: ObjectTester): void {
    testDir(getAssetsPath(subpath), test);
}

export { testDir, getAssetsPath, testAssetsDir };
export type { ObjectTester };
