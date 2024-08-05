const Customer = require('../src/models/Customer');

test('should return correct customer details', () => {
    const customer = new Customer('Alice', 'alice@example.com');
    expect(customer.getDetails()).toBe('Alice, Email: alice@example.com');
});
