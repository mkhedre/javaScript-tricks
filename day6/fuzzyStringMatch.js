function fuzzyStringMatch(str1, str2, threshold) {
  let arr1 = str1.split('');
  let add = 0;
  let arr2 = str2.split('');

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    arr1[i] == arr2[i] ? add : add++;
  }
  return add == threshold;
}

console.log('Example:');
console.log(fuzzyStringMatch('apple', 'appel', 2));
