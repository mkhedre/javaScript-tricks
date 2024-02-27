function exceptZero(items) {
  // your code here
  let initValue = items[0];
  let newArr = [];
  items.reduce((acc, curr) => {
    curr < initValue;
  }, initValue);
}

console.log('Example:');
console.log(JSON.stringify(exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7])));

/**
 *
 *
 */
