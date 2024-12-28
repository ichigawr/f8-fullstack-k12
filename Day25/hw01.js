Array.prototype.filter2 = function (callback, thisArg) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    const res = callback.call(thisArg, this[i], i, this);
    if (res) newArr.push(this[i]);
  }

  return newArr;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.filter2((value) => value % 2 !== 0);

console.log(result);
