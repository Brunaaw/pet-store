class PetStore {
    constructor(persistence) {
        this.persistence = persistence;
    }

    savePet(pet) {
        this.persistence.save(pet);
    }
}

module.exports = PetStore;
