import { readFileSync, readdirSync } from 'fs';
import JSON5 from 'json5';
import path from 'path';

type FileEntry<T> = {
    fileBaseName: string;
    payload: T;
};

function* slurpDir(dir: string): Generator<FileEntry<object>> {
    const files = readdirSync(dir).filter(f => f.endsWith('.json5'));
    for (const file of files) {
        const content = readFileSync(`${dir}/${file}`, 'utf8');
        const obj = JSON5.parse(content);
        yield { fileBaseName: path.basename(file, '.json5'), payload: obj };
    }
}

function getAssetsPath(subpath?: string): string {
    return path.join(path.resolve(__dirname, '..'), subpath ?? '');
}

function* slurpAssetsDir(subpath: string): Generator<FileEntry<object>> {
    const dir = getAssetsPath(subpath);
    yield* slurpDir(dir);
}

export { slurpAssetsDir };
export type { FileEntry };
