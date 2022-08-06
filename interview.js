// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 1000);
// setTimeout(function () {
//   console.log(3);
// }, 0);
// console.log(4);

// // What is the output of the following code?
// // a number x and a character y
// //
// // Generation

// function x() {
//   console.log(i);
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
//   var i = 1;
// }
// x();
// const arr = [
//   {
//     name: 'John',
//     age: 30,
//   },
//   {
//     name: 'Jane',
//     age: 25,
//   },
//   {
//     name: 'Bob',
//     age: 20,
//   },
// ];

// console.log(Object.getOwnPropertyNames(arr));
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
  console.dir(displayName);
}
init();

// if (Math.random() > 0.5) {
//   const x = 1;
// } else {
//   const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined
