//Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num until the array length reaches length.

const arrayOfMultiples = (num, len) => {
  let sum = [];
  for (let i = 1; i <= len; i++) {
    return sum.push(num * i);
  }
  return sum;
};

/// another sol
// const arrayOfMultiples = (num, length) =>
//   Array.from({ length :length}, (_, i) => num * (i + 1));

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]

// anoher sol
// function arrayOfMultiples (num, length) {
// 	return [...Array(length)].map((_, i) => num * (i + 1))
// }

//const arrayOfMultiples = (n, l) => [...Array(l)].map((_, i) => -~i * n);

arrayOfMultiples(7, 5);

arrayOfMultiples(12, 10);

arrayOfMultiples(17, 6);

////////////////////////notes

/* 
The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
Array.from() >> lets you create Array s from
the power of Array.from() 
Array.from(arrayLike,mapFun)

*/
//the power of Array.from()
Array.from(arrayLike, mapFun);
Array.from([12, 2, 2], (x) => x + x);
// [24,4,4]
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
