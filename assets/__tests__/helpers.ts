type Assertion<T> = (value: unknown, message: string) => asserts value is T;

class AssertionError extends Error {
    constructor(message: string, raw?: unknown) {
        super(
            `AssertionError: ${message}\n${JSON.stringify(raw as any, null, 2)}`,
        );
        this.name = 'AssertionError';
    }
}

function assertNumber(
    value: unknown,
    message: string,
): asserts value is number {
    if (typeof value !== 'number') throw new AssertionError(message);
}

function assertString(
    value: unknown,
    message: string,
): asserts value is string {
    if (typeof value !== 'string') throw new AssertionError(message);
}

function assertDateString(
    value: unknown,
    message: string,
): asserts value is string {
    assertString(value, message);
    if (!/^\d{4}-\d{2}-\d{2}/.test(value)) throw new AssertionError(message);
}

function assertObject(
    value: unknown,
    message: string,
): asserts value is Record<string, unknown> {
    if (typeof value !== 'object' || value === null)
        throw new AssertionError(message);
}

function assertProperty<K extends string, T>(
    obj: unknown,
    key: K,
    message: string,
    check: Assertion<T>,
): asserts obj is Record<K, T> {
    if (typeof obj !== 'object' || obj === null)
        throw new AssertionError(message);
    if (!Object.hasOwn(obj, key)) throw new AssertionError(message);
    check((obj as any)[key as any], message);
}

export {
    assertNumber,
    assertString,
    assertDateString,
    assertObject,
    assertProperty,
};
