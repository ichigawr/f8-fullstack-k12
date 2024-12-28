const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.reduce((total, el) => total + el, 0));

/** */

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11];
console.log(
  arr2.reduce((multi, el) => {
    if (isPrime(el)) multi *= el;
    return multi;
  }, 1)
);

/** */

const fruits = [
  "apple",
  "banana",
  "orange",
  ,
  ,
  ,
  ,
  "kiwi",
  "orange",
  "apple",
  "kiwi",
  "apple",
];

console.log(
  fruits.reduce((fruitsCount, fruit) => {
    if (!fruitsCount[fruit]) fruitsCount[fruit] = 1;
    else fruitsCount[fruit]++;

    return fruitsCount;
  }, {})
);

/** */

const users = [
  { id: 1, fullname: "Nguyen Manh Dung", gender: "male", address: "Ca Mau" },
  { id: 2, fullname: "Nguyen Xuan Phu", gender: "male", address: "Da Nang" },
  { id: 3, fullname: "Bui Tien Toan", gender: "male", address: "Quang Ninh" },
  {
    id: 4,
    fullname: "Nguyen Phuong Hang",
    gender: "female",
    address: "Khanh Hoa",
  },
  { id: 5, fullname: "Nguyen Minh Anh", gender: "female", address: "Bac Ninh" },
  {
    id: 6,
    fullname: "Duong Thuy Dung",
    gender: "female",
    address: "Quang Ninh",
  },
];

const createGroupUsers = (users) => {
  const grouped = {};

  for (const { gender, address, ...rest } of users) {
    if (!grouped[address]) {
      grouped[address] = {
        male: [],
        female: [],
      };
    }

    grouped[address][gender].push(rest);
  }

  return grouped;
};

console.log(createGroupUsers(users));
