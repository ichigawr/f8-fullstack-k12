const isValid = (value) => !isNaN(value) && value > 0;

const printSquareNumbers = () => {
  let n;

  while (true) {
    n = window.prompt("Nhập n:");

    if (!isValid(n))
      alert("Dữ liệu không hợp lệ, vui lòng nhập lại.");
    else break;
  }

  document.write(`Các số chính phương từ 1 tới ${n}: <br />`);

  for (let i = 1; i <= Math.sqrt(n); i++) {
    document.write(i ** 2 + "<br />");
  }
};

printSquareNumbers();
