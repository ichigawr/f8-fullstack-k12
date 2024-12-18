const obj1 = { name: "vinh" };
const obj2 = { age: 19 };

Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);

const objDeepCopy = structuredClone(obj1);
console.log(objDeepCopy);
objDeepCopy.age = 22;
console.log(obj1);
