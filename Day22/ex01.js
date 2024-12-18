const obj = {
  name: "Vinh",
  age: "19",
  bruh: "bruh",
  "a b": "a b",
};

obj;
delete obj.bruh;
obj;

console.log(obj["a b"]);

const newKey = "sigma";
obj[newKey] = "sigma";
console.log(obj.sigma);

const a = "1";
const b = "2";
const c = "3";
console.log({ a, b, c });
