//Create a function that counts the integer's number of digits.

const count = (n) => Math.ceil(Math.log10(Math.abs(n || 10)));

function count(n) {
  return (n / 10) | 0 ? 1 + count(n / 10) : 1;
}
