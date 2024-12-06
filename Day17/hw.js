/* Bai 1 */

function swap(a, b) {
  return [b, a];
}

console.log(swap(3, 5));

/* */

/* Bai 2 */

function max(a, b, c) {
  if (a > b && a > c) return a;
  if (b > c && b > a) return b;
  return c;
}

console.log(max(2, 3, 5));

/* */

/* Bai 3 */

function haveSameSign(a, b) {
  return a / b >= 0;
}

console.log(haveSameSign(3, -5));

/* */

/* Bai 4 */

function sort(a, b, c) {
  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];
  return [a, b, c];
}

console.log(sort(5, 2, 3));

/* */
