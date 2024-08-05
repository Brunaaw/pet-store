const SpecialCare = require('../src/models/SpecialCare');

test('should provide special care', () => {
    const specialCare = new SpecialCare();
    expect(specialCare.provideCare()).toBe('Special care provided.');
});
