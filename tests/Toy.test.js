const Toy = require('../src/models/Toy');

test('should return correct toy details', () => {
    const toy = new Toy('Ball', 5, 'Rubber');
    expect(toy.getDetails()).toBe('Ball costs $5. Made of: Rubber.');
});
