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
  return arr[maxIndex];
}

console.log(longestWord('hello world'));

// another solution

function longestWord(sentence) {
  let arr = sentence.split(' ');
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) max = arr[i];
  }
  return max;
}

// another solution

function longestWord(sentence) {
  let sortedByLength = sentence.split(' ').sort((a, b) => b.length - a.length);
  return sortedByLength[0] || '';
}
// another solution

function longestWord(sentence) {
  const result = sentence.split(' ').reduce((acc, cur) => {
    if (cur.length > acc.length) {
      acc = cur;
    }
    return acc;
  }, '');
  return result;
}
/**
 * reduce((acc, cur) => {...}, ''): The reduce function is used to iterate over the array of words. It takes two parameters:
 * acc: The accumulator, which starts as an empty string ('').
 * cur: The current element being processed, which represents a word from the sentence.
 */

function longestWord(sentence) {
  if (!sentence) return '';
  return sentence
    .match(/\w+/g)
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    );
}
