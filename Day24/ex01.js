const students = [
  { id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn" },
  { id: 2, fullname: "Hoang Quang Thang", age: 18, address: "VinhPhuc" },
  { id: 3, fullname: "Kieu Minh Tue", age: 21, address: "VinhPhuc" },
];

console.log(students.filter(student => student.age > 18));

/**
 * Shallow copy
 * - concat()
 * - spread operator
 * - slice()
 * - ...
 * 
 * Deep copy
 * - JSON: nhược điểm là không xử lí được phương thức và các giá trị đặc biệt
 * - dùng thư viện: 
 * - structuredClone()
 */

const myObject = {
  name: "F8",
  age: 30,
};

const myObject2 = { ...myObject };
console.log(myObject2);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log([...arr1, "Hoang", ...arr2]);

