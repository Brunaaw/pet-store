const Food = require('../src/models/Food');

test('should return correct food details', () => {
    const food = new Food('Kibble', 20, '2025-12-31');
    expect(food.getDetails()).toBe('Kibble costs $20. Expiration date: 2025-12-31.');
});
