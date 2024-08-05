class Pet {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    getDetails() {
        return `${this.name} is a ${this.age}-year-old ${this.species}.`;
    }
}

module.exports = Pet;
