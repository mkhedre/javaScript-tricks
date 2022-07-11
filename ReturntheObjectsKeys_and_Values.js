//Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically,
// and their corresponding values in the same order.

function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map((key) => obj[key])];
}
//array.map
//Creates a new array with the results of calling a provided function on every element in the calling array.
