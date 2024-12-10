const isValid = (value) => !isNaN(value) && value > 0;

const calcBMI = (w, h) => {
  const BMI = w / h ** 2;

  switch (true) {
    case BMI < 18.5:
      return "thieu can";
    case BMI < 23:
      return "binh thuong";
    case BMI < 25:
      return "thua can";
    default:
      return "beo phi";
  }
};

console.log(calcBMI(70, 1.75));

/** */

const quarter = (month) => {
  switch (month) {
    case 0:
    case 1:
    case 2:
      return "Quý I";
    case 3:
    case 4:
    case 5:
      return "Quý II";
    case 6:
    case 7:
    case 8:
      return "Quý III";
    case 9:
    case 10:
    case 11:
      return "Quý IV";
    default:
      return "Dữ liệu không hợp lệ";
  }
};

/** */

const primes = (n) => {
  let isPrime = [];
  let ans = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) continue;

    ans.push(i);

    for (let j = i + i; j <= n; j += i) {
      isPrime[j] = true;
    }
  }

  return ans;
};

console.log(primes(20));

/** */

const printTriangle = (n, char) => {
  let s = "";

  for (let i = 1; i <= n; i++) {
    s += char;
    console.log(s);
  }
};

printTriangle(5, "$");

/** */

const primesButWhile = (n) => {
  let isPrime = [];
  let ans = [];

  let i = 2;
  while (i <= n) {
    if (isPrime[i]) {
      i++;
      continue;
    }

    ans.push(i);

    let j = i + i;
    while (j <= n) {
      isPrime[j] = true;
      j += i;
    }

    i++;
  }

  return ans;
};

console.log(primesButWhile(20));

/** */

const students = [
  { name: "Minh", age: 18 },
  { name: "Thang", age: 20 },
  { name: "Son", age: 34 },
];

for (const student of students) {
  if (student.age < 20) console.log(student);
}

/** */

const cart = [
  { id: 1, title: "TV Xiaomi X", price: 10000000, quantity: 2 },
  { id: 2, title: "Xiaomi 16 ProMax", price: 30000000, quantity: 3 },
];

const bill = (cart) => {
  let totalBill = 0;
  
  for (const item of cart) {
    totalBill += item.price * item.quantity;
  }

  return totalBill;
}

console.log(bill(cart));
