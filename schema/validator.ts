import { readFileSync, readdirSync } from 'fs';
import JSON5 from 'json5';
import Ajv from 'ajv';
import path from 'path';

const assetTypes = {
    Adventure: 'Adventures',
    Character: 'Characters',
} as const;
type AssetType = keyof typeof assetTypes;

function isJson5Parseable(path: string): boolean {
    return path.endsWith('.json5') || path.endsWith('.json');
}

const schemas: Map<AssetType, object> = new Map();

const ajv = new Ajv();

function loadSchema(schemaKey: AssetType): void {
    const schemaPath = `./dist/schemas/${schemaKey}.schema.json`;
    const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
    schemas.set(schemaKey, schema);
}

function getSchema(schemaKey: AssetType): object {
    if (!schemas.has(schemaKey)) {
        loadSchema(schemaKey);
    }
    const schema = schemas.get(schemaKey);
    if (!schema) {
        throw new Error(`Schema ${schemaKey} not found`);
    }
    return schema;
}

function validateObject(schemaKey: AssetType, raw: object): void {
    const schema = getSchema(schemaKey);
    if (!ajv.validate(schema, raw)) {
        throw new Error(ajv.errorsText());
    }
}

function validateFile(schemaKey: AssetType, filePath: string): void {
    console.log(`Validating ${schemaKey} asset in ${filePath}`);
    const raw = JSON5.parse(readFileSync(filePath, 'utf8'));
    validateObject(schemaKey, raw);
}

function validateDirectory(schemaKey: AssetType, dirPath: string): void {
    console.log(`Validating ${schemaKey} assets in ${dirPath}`);
    const files = readdirSync(dirPath).filter(isJson5Parseable);
    files.forEach(file => validateFile(schemaKey, path.resolve(dirPath, file)));
}

function validateKnowDirectories(): void {
    console.log(
        `Validating known directories. Working directory: ${process.cwd()}; Current path: ${__dirname}`,
    );
    Object.keys(assetTypes).forEach(k =>
        validateDirectory(
            k as AssetType,
            path.resolve('assets', assetTypes[k as AssetType]),
        ),
    );
}

validateKnowDirectories();
