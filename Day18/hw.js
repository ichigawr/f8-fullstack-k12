/** Bai 1 */

const calcTax = (income) => {
  let tax = 0;

  if (income <= 11)
    tax = 0;
  else if (income <= 25)
    tax = (income - 11) * 0.05;
  else if (income <= 50)
    tax = (25 - 11) * 0.05 + (income - 25) * 0.1;
  else if (income <= 80)
    tax = (25 - 11) * 0.05 + (50 - 25) * 0.1 + (income - 50) * 0.2;
  else tax = (25 - 11) * 0.05 + (50 - 25) * 0.1 + (80 - 50) * 0.2 + (income - 80) * 0.3;

  alert("Thuế thu nhập cá nhân: " + tax);
};

const income = parseFloat(window.prompt("Lương (triệu):"));
calcTax(income);

/** */

/** Bai 2 */

const calcElectricityBill = (kwh) => {
  const thresholds = [0, 50, 100, 200, 300, 400];
  const prices = [1678, 1734, 2014, 2536, 2834, 2927];
  const fixedBill = [0, 83900, 170600, 372000, 625600, 909000];

  let bill = 0;
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (kwh > thresholds[i]) {
      bill = (kwh - thresholds[i]) * prices[i] + fixedBill[i];
      break;
    }
  }

  alert("Tiền điện: " + bill + " VNĐ");
};

const kwh = parseFloat(window.prompt("Số kWh sử dụng:"));
calcElectricityBill(kwh);

/** */

/** Bai 3 */

const isRightTriangle = (a, b, c) => {
  if (a ** 2 === b ** 2 + c ** 2)
    alert("Là tam giác vuông");
  else if (b ** 2 === c ** 2 + a ** 2)
    alert("Là tam giác vuông");
  else if (c ** 2 === a ** 2 + b ** 2)
    alert("Là tam giác vuông");
  else alert("Không là tam giác vuông");
};

const a = parseFloat(window.prompt("Độ dài cạnh a của tam giác:"));
const b = parseFloat(window.prompt("Độ dài cạnh b của tam giác:"));
const c = parseFloat(window.prompt("Độ dài cạnh c của tam giác:"));

isRightTriangle(a, b, c);

/** */

/** Bai 4 */

const calcBMI = (weight, height) => {
  const isValid = (value) => !isNaN(value) && value > 0;

  if (!isValid(weight) || !isValid(height)) {
    alert("Dữ liệu không hợp lệ");
    return;
  }

  const BMI = weight / height ** 2;

  if (BMI < 18.5) alert("Thiếu cân");
  else if (BMI < 23) alert("Bình thường");
  else if (BMI < 25) alert("Thừa cân");
  else alert("Béo phì");
};

const weight = parseFloat(window.prompt("Cân nặng (kg):"));
const height = parseFloat(window.prompt("Chiều cao (m):"));

calcBMI(weight, height);

/** */
