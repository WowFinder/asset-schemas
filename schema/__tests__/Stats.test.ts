import { expectTypeTestsToPassAsync } from 'jest-tsd';

it('should pass static type tests', async () => {
    await expectTypeTestsToPassAsync(__filename);
});
