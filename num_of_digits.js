const num_of_digits = (num) => {
  return num.toString().length;
};

const num_of_digits2 = (num) => {
  let n = Math.abs(num);
  let count = 1;
  while ((n /= 10) >= 1) {
    count++;
  }
  return count;
};
console.log(num_of_digits2(123));

const num_of_digits3 = (num) => {
  return `${num}`.match(/\d/g).length;
};
console.log(num_of_digits3(123));
