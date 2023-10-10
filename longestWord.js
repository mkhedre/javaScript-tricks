function longestWord(sentence) {
  let obj = {};
  let maxValue = -Infinity;
  let maxIndex = 0;
  let arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i].length;
  }
  for (const key in obj) {
    if (obj[key] > maxValue) {
      let NumKey = parseInt(key, 10); // for type conversion
      maxValue = obj[NumKey];
      maxIndex = NumKey;
    }
  }
  console.log(maxIndex);
  // your code here
  return arr[maxIndex];
}

console.log(longestWord('hello world'));
