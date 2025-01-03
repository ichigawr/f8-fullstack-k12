const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function removeDuplicate(arr) {
  if (!Array.isArray(arr)) return "Không phải mảng";

  // return arr.reduce((res, el) => {
  //   if (!res.includes(el)) res.push(el);
  //   return res;
  // }, []);

  return arr.filter(
    (el, idx) => arr.indexOf(el) === idx
  );
}

const result = removeDuplicate(fruits);

console.log(result);

console.log(removeDuplicate(3));
