it('Should validate the sample assets', () => {
    const oldLog = console.log;
    console.log = jest.fn();
    expect(() => require('../validator')).not.toThrow();
    console.log = oldLog;
});
