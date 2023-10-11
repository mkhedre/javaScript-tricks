function revStr(str) {
  return str.split('').reverse().join('');
}
console.log(revStr('hello')); // olleh

function revStr2(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(revStr2('hello')); // olleh

function revStr3(str) {
  if (str === '') return '';
  return revStr3(str.substr(1)) + str.charAt(0);
}
console.log(revStr3('hello')); // olleh

function revStr4(str) {
  if (str === '') return '';
  return revStr4(str.substr(1)) + str[0];
}
console.log(revStr4('hello')); // olleh
