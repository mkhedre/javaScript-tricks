// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
  let s = '';
  return function () {
    s = str;
    return s;
  };
}
const f1 = redundant('apple');
f1();
