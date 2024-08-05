class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return `${this.name} costs $${this.price}.`;
    }
}

module.exports = Product;
