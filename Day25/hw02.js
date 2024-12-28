Array.prototype.map2 = function (callback, thisArg) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    const res = callback.call(thisArg, this[i], i, this);
    newArr[i] = res;
  }

  return newArr;
};

const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map2((value) => value * 2);

console.log(result1);
console.log(result1.length);

const arr2 = [1, , , , 5];
const result2 = arr2.map2((value) => value * 2);

console.log(result2);
console.log(result2.length);
