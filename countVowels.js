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
