function fibonacci() {
  let n;

  while (true) {
    n = parseInt(window.prompt("Nhập số phần tử (số nguyên dương):"));

    if (isNaN(n) || n < 1)
      alert("Số phần tử không hợp lệ");
    else break;
  }

  if (n === 1) {
    document.write(0);
    return;
  }

  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  document.write(`Dãy Fibonacci với ${n} phần tử: ` + fib.join(", "));
}

fibonacci();

// fibonacci(5);

// fibonacci(10);

// fibonacci(0);

// fibonacci(-5);

// fibonacci("abc");

// fibonacci(1);
