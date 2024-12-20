const products = [
  {
    id: 1,
    name: "Apple iPhone 12",
    price: 1000,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 900,
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    price: 800,
  },
  {
    id: 4,
    name: "Apple iPhone 11",
    price: 700,
  },
  {
    id: 5,
    name: "Samsung Galaxy S20",
    price: 600,
  },
  {
    id: 6,
    name: "Xiaomi Mi 10",
    price: 500,
  },
];

const getTopProducts = (products, top) => {
  const productsCopy = products.slice();

  for (let i = 0; i < productsCopy.length - 1; i++) {
    for (let j = i + 1; j < productsCopy.length; j++) {
      if (productsCopy[j] > productsCopy[i])
        [productsCopy[i], productsCopy[j]] = [productsCopy[j], productsCopy[i]];
    }
  }

  return productsCopy.slice(0, top);
};

const result = getTopProducts(products, 3);
console.log(result);
