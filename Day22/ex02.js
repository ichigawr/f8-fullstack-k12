const product = {
  title: "A",
  price: 200,
  description: "A",
};

for (const key in product) {
  console.log(key + ": " + product[key]);
}

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

/** */

const info = [
  ["name", "vinh"],
  ["age", 19],
  ["address", "HN"],
];

const objInfo = {};

for (const [key, value] of info) {
  objInfo[key] = value;
}

console.log(objInfo);

/** */

const cart = {
  products: [
    { id: 1, title: "san pham A", price: 200, quantity: 2 },
    { id: 2, title: "san pham B", price: 300, quantity: 4 },
    { id: 3, title: "san pham C", price: 230, quantity: 1 },
  ],

  getTotal: function () {
    let total = 0;

    for (const product of this.products) {
      const { price, quantity } = product;
      total += price * quantity;
    }

    return total;
    // return cart.products.reduce((sum, product) => sum + price * quantity, 0);
  },

  updateProduct: function (id, quantity) {
    for (const product of this.products) {
      if (product.id == id) {
        product.quantity = quantity;
        break;
      }
    }

    return this.products;
  },

  removeProduct: function (id) {
    let newProducts = [];

    for (const product of this.products) {
      if (product.id != id) newProducts.push(product);
    }

    this.products = newProducts;
    return this.products;
  },
};

console.log(cart.getTotal());
console.log(cart.updateProduct(2, 3));
console.log(cart.removeProduct(2));
