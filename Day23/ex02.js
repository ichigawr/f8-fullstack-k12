const data = ["F8", undefined, 0, "Hoang", "Tue", 100, NaN, "Dong", ""];

for (let i = 0; i < data.length; i++) {
  if (!data[i]) data.splice(i--, 1);
}

console.log(data);
