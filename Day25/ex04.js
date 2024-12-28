function Cart(products, userId) {
  this.products = products;
  this.userId = userId;
}

Cart.prototype.getTotal = function () {
  return this.products.reduce(
    (total, { quantity, price }) => total + quantity * price,
    0
  );
};

const products = [
  { id: 1, title: "Product A", quantity: 2, price: 200 },
  { id: 2, title: "Product B", quantity: 1, price: 300 },
  { id: 3, title: "Product C", quantity: 4, price: 240 },
];

const cartOfHoang = new Cart(products, "123");
const cartOfThang = new Cart(
  [{ id: 5, title: "tomato", quantity: 4, price: 1 }],
  "456"
);
console.log(cartOfHoang.getTotal());
console.log(cartOfThang.getTotal());

console.log(Object.getPrototypeOf(cartOfHoang));
