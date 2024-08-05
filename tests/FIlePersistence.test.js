const FilePersistence = require('../src/persistence/FilePersistence');

test('should log saving data to file', () => {
    console.log = jest.fn(); // Mock console.log
    const filePersistence = new FilePersistence();
    filePersistence.save('test data');
    expect(console.log).toHaveBeenCalledWith('Saving data to file:', 'test data');
});
