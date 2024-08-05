const Pet = require('../src/models/Pet');

test('should return correct pet details', () => {
    const pet = new Pet('Rex', 'Dog', 5);
    expect(pet.getDetails()).toBe('Rex is a 5-year-old Dog.');
});
