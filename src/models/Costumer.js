class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        return `${this.name}, Email: ${this.email}`;
    }
}

module.exports = Customer;
