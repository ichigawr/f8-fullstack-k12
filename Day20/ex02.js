const users = [
  { id: 1, username: "Minh", address: "NgheAn" },
  { id: 2, username: "Tue", address: "VinhPhuc" },
  { id: 3, username: "Son", address: "HaNoi" },
  { id: 4, username: "Cong", address: "HaNoi" },
  { id: 5, username: "Toan", address: "HaNam" },
];

const usersGroupByAddress = {};

for (const user of users) {
  if (!usersGroupByAddress[user.address])
    usersGroupByAddress[user.address] = [user];
  else usersGroupByAddress[user.address].push(user);
}

console.log(usersGroupByAddress);

/** */

const students = [
  { id: 1, username: "Son", score: 8 },
  { id: 2, username: "Dung", score: 5 },
  { id: 3, username: "Minh", score: 2 },
];

let totalScore = 0;
let maxScore = students[0].score;
let minScore = students[0].score;

for (let i = 1; i < students.length; i++) {
  const score = students[i].score;
  maxScore = Math.max(maxScore, score);
  minScore = Math.min(minScore, score);
  totalScore += score;
}

const avgScore = totalScore / students.length;

console.log(minScore, maxScore, avgScore);

/** */

const products = [
  { id: 1, title: "Product A", price: 200 },
  { id: 2, title: "Product B" },
  { id: 3, title: "Product C", price: 200 },
];

const index = products.findIndex(
  (product) => !product.price || isNaN(product.price) || product.price < 0
);
console.log(index);
