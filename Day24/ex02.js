const arr1 = [5, 5, 1, 24, 0, 29, 4, 33];

console.log(arr1.sort((a, b) => a - b));

const students = [
  { id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn" },
  { id: 2, fullname: "Hoang Quang Thang", age: 18, address: "VinhPhuc" },
  { id: 3, fullname: "Kieu Minh Tue", age: 21, address: "VinhPhuc" },
  { id: 6, fullname: "Nguyen Van Anh Cong", age: 18, address: "HaNoi" },
  { id: 4, fullname: "Nguyen Van Cong", age: 18, address: "HaNoi" },
  { id: 5, fullname: "Nguyen Minh Cong", age: 18, address: "HaNoi" },
];

console.log(students.slice().sort((s1, s2) => s1.age - s2.age));
console.log(
  students.slice().sort((s1, s2) => {
    const fullname1 = s1.fullname.split(" ");
    const fullname2 = s2.fullname.split(" ");
    const name1 = fullname1.pop();
    const name2 = fullname2.pop();

    if (name1 === name2)
      return fullname1.join() < fullname2.join() ? -1 : 1;

    return name1 < name2 ? -1 : 1;
  })
);
