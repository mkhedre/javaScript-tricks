// function countTrue(arr) {
//   let news = arr.filter((ele) => ele === true);
//   console.log(news);
// }
const countTrue = (r) => r.filter(Boolean).length;

console.log(countTrue([true, false, false, true, false]));
console.log(
  countTrue([
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
  ])
);
// The filter(Boolean) step does the following:

// Passes each item in the array to the Boolean() object
// The Boolean() object coerces each item to true or false depending on whether it's truthy or falsy
// If the item is truthy, we keep it
