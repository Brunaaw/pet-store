class Persistence {
    save(data) {
        throw new Error('Method must be implemented by subclasses.');
    }
}

module.exports = Persistence;
