const students = ["0", 1, [2], { 3: 4 }];
console.log(students);

students.unshift("br", "uh");
console.log(students);

students.shift();
console.log(students);

const users = ["Cong", "Minh", "Tue", "Son", "Thang", "Dung", "Hoang"];

for (let i = 0, j = users.length - 1; i < j; i++, j--) {
  let tmp = users[i];
  users[i] = users[j];
  users[j] = tmp;
}

console.log(users);
