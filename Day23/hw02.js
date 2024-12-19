const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];

const flattenCategories = (categories) => {
  const flattened = [];

  const flattenChildren = (children, level) => {
    if (!children) return;

    for (const child of children) {
      const { id, name } = child;
      flattened.push({ id, name, level });
      flattenChildren(child.children, level + 1);
    }
  };

  flattenChildren(categories, 0);

  categories.splice(0, Infinity, ...flattened);
  return categories;
};

console.log(flattenCategories(categories));

const getCategoryName = (categories, categoryId) => {
  const res = categories.find((category) => category.id === categoryId);
  return res ? res.name : null;
};

console.log(getCategoryName(categories, 3));
console.log(getCategoryName(categories, 10));
console.log(getCategoryName(categories, 99));
