console.log(3 > 2 && "3 > 2");

console.log(undefined / 2);

console.log(2 > 3 || 1 > 3 || null);

console.log(String(["vi", "nh", false, null, 1]));

console.log(String([1, 2, 3]));

/** */

function welcome(username = "") {
  return `welcome ${username}`;
}

console.log(welcome("vinh"));

const cart = {
  userId: "123",
  products: [],
  total: () => {},
};

const sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 3));

const getUserInfo = () => ({
  username: "vinh",
  age: 19,
});

console.log(getUserInfo());

/** */

const calcBMI = () => {
  let weight = parseFloat(window.prompt("Can nang (kg): "));
  let height = parseFloat(window.prompt("Chieu cao (m): "));

  const isValid = value => (!isNaN(value) && value > 0);

  if (!isValid(weight) || !isValid(height)) {
    alert("Can nang, chieu cao phai la so duong");
    return;
  }

  const BMI = weight / height ** 2;

  if (BMI < 18.5) alert("thieu can");
  else if (BMI < 22.9) alert("binh thuong");
  else if (BMI < 24.9) alert("thua can");
  else alert("beo phi");
};

// calcBMI();
