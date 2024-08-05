const Product = require('./Product');

class Food extends Product {
    constructor(name, price, expirationDate) {
        super(name, price);
        this.expirationDate = expirationDate;
    }

    getDetails() {
        return `${super.getDetails()} Expiration date: ${this.expirationDate}.`;
    }
}

module.exports = Food;
