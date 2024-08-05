const BasicCare = require('../src/models/BasicCare');

test('should provide basic care', () => {
    const basicCare = new BasicCare();
    expect(basicCare.provideCare()).toBe('Basic care provided.');
});
