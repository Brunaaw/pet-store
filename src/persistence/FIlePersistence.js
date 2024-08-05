const Persistence = require('./Persistence');

class FilePersistence extends Persistence {
    save(data) {
        console.log('Saving data to file:', data);
    }
}

module.exports = FilePersistence;
