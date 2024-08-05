const Pet = require('./models/Pet');
const Food = require('./models/Food');
const Toy = require('./models/Toy');
const BasicCare = require('./models/BasicCare');
const SpecialCare = require('./models/SpecialCare');
const Customer = require('./models/Customer');
const FilePersistence = require('./persistence/FilePersistence');
const PetStore = require('./services/PetStore');

// Exemplo de uso
const pet = new Pet('Rex', 'Dog', 5);
const food = new Food('Kibble', 20, '2025-12-31');
const toy = new Toy('Ball', 5, 'Rubber');
const basicCare = new BasicCare();
const specialCare = new SpecialCare();
const customer = new Customer('Alice', 'alice@example.com');

console.log(pet.getDetails());
console.log(food.getDetails());
console.log(toy.getDetails());
console.log(basicCare.provideCare());
console.log(specialCare.provideCare());
console.log(customer.getDetails());

const filePersistence = new FilePersistence();
const petStore = new PetStore(filePersistence);
petStore.savePet(pet.getDetails());
