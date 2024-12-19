const students = ["Minh", "Tue", "Vinh", "Toan", "Thong", "Son"];

console.log(students.slice(0, 2));
console.log(students.slice(-2));
console.log(students.slice(1, -1));

// students.splice(2);
console.log(students.splice(1, 0, "wow", "wow", 1));
console.log(students);
