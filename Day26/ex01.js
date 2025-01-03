let content = "F8 - Hoc lap trinh";

const stringReverse = (str, i = 0) => {
  // return str.split("").reverse().join("");
  if (i >= str.length) return "";
  return stringReverse(str, i + 1) + str[i];
};

console.log(stringReverse(content));
console.log(content.split(" ", 2));
console.log(content.split(" ", -100));
console.log(content.split(" ", NaN));
console.log(content.split(" ", "abc"));
