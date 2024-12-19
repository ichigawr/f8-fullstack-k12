const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.find((item) => item % 2 === 0));
console.log(arr.find((item) => item > 100));
console.log(arr.includes(2));
console.log(arr.filter((item) => item % 2 === 0));

const products = [
  { id: 1, title: "San pham A", price: 200, quantity: 2, discount: 0.2 },
  { id: 2, title: "San pham B", price: 200, quantity: 1, discount: 0.1 },
  { id: 3, title: "San pham C", price: 200, quantity: 3, discount: 0.05 },
  { id: 4, title: "San pham D", price: 200, quantity: 2, discount: 0.35 },
];

const hotSaleProducts = (products) => {
  return products.filter((product) => product.discount >= 0.2);
};

console.log(hotSaleProducts(products));

let total = 0;
products.forEach(
  (item) => (total += item.price * item.quantity * (1 - item.discount))
);

console.log(total);


