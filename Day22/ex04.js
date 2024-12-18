const product = {
  title: "A",
  price: 200,
  description: "A",
};

const { title, price, description } = product;
console.log(title + " " + price + " " + description);

const { tit, pri, ...other } = product;
console.log(other);

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
