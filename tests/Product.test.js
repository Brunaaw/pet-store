const Product = require('../src/models/Product');

test('should return correct product details', () => {
    const product = new Product('Generic Product', 10);
    expect(product.getDetails()).toBe('Generic Product costs $10.');
});
