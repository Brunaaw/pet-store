const Pet = require('../src/models/Pet');
const FilePersistence = require('../src/persistence/FilePersistence');
const PetStore = require('../src/services/PetStore');

test('should save pet details using persistence', () => {
    const pet = new Pet('Rex', 'Dog', 5);
    const filePersistence = new FilePersistence();
    jest.spyOn(filePersistence, 'save'); // Spy on save method
    const petStore = new PetStore(filePersistence);
    petStore.savePet(pet.getDetails());
    expect(filePersistence.save).toHaveBeenCalledWith('Rex is a 5-year-old Dog.');
});