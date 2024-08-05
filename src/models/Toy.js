const Product = require('./Product');

class Toy extends Product {
    constructor(name, price, material) {
        super(name, price);
        this.material = material;
    }

    getDetails() {
        return `${super.getDetails()} Made of: ${this.material}.`;
    }
}

module.exports = Toy;
