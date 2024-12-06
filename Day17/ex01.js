const username = "vinh";
const age = 32;
const email = "js@gmail.com";

const info = {
  username: "vinh",
  age: 32,
  email: "js@gmail.com",
};

const list = [1, 2, 3, 4, 5];
console.log(Array.isArray(list));

list[10] = 11;
console.log(list);

function sum(a, b) {
  console.log(a + b);
  return a + b;
}

console.log(sum(2, 3));
console.log(sum(10, 20));

/* */

function rectPerimeter(a, b) {
  return (a + b) * 2;
}

function rectArea(a, b) {
  return a * b;
}

const PI = 3.14;

function circleArea(r) {
  return r * r * PI;
}

console.log(rectPerimeter(4, 6));
console.log(rectArea(4, 6));
console.log(circleArea(10));

/* */

// let promptValue = window.prompt("2 + 3 = ?");
// console.log(promptValue);

// let width = +window.prompt("Nhap vao chieu rong:");
// let height = +window.prompt("Nhap vao chieu cao");
// alert("Chu vi hinh chu nhat la: " + rectPerimeter(width, height));

console.log(+"1" + 1);

/* */

console.log(1 == "1");
console.log(1 === "1");
