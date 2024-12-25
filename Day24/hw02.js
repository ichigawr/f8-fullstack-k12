function fibonacci(n) {
  if (isNaN(n) || n < 1) {
    console.log("Số phần tử không hợp lệ");
    return;
  }

  if (n === 1) {
    console.log(0);
    return;
  }

  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  console.log(fib);
}

fibonacci(5);

fibonacci(10);

fibonacci(0);

fibonacci(-5);

fibonacci("abc");

fibonacci(1);
