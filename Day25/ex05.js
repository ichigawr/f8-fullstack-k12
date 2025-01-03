const user = { name: "test", age: 33 };
const admin = Object.create(user);
const student = Object.create(user);

console.log(admin.name);
console.log(student.name);

user.name = "new";

console.log(admin.name);
console.log(student.name);

const client = Object.create(user, {
  name: {
    value: "hoang",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 33,
    writable: false,
    enumerable: false,
    configurable: false,
  },
});

client.age = 34;
console.log(client.age);
console.log(client);

Object.defineProperties(client, {
  name: {
    writable: false,
  }
});

client.name = "new";
console.log(client.name);
