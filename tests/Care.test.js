const Care = require('../src/models/Care');

test('should throw error if provideCare is not implemented', () => {
    const care = new Care();
    expect(() => care.provideCare()).toThrow('Method must be implemented by subclasses.');
});
