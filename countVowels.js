const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function countVowels(text) {
  // your code here
  let arr = text.split('');
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (VOWELS.includes(arr[i].toLowerCase())) counter++;
  }
  // your code here
  return counter;
}
console.log(countVowels('Hello'));

function countVowels(text) {
  let count = 0;
  for (let char of text.toLowerCase()) {
    count += Number('aeiou'.includes(char));
  }
  return count;
}

function countVowels(text) {
  // your code here
  return text.split(/[aeiou]/i).length - 1;
}
