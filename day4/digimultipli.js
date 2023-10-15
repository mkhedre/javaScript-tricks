function digitsMultip(data) {
  let arr = String(data).split('');
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    arr[i] == '0' ? (sum *= 1) : (sum *= parseInt(arr[i]));
  }
  return sum;
  // return sum;
}

console.log(digitsMultip(123405));
