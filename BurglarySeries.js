function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}
function addNAme2(obj, name, value) {
  return { ...obj, [name]: value };
}
const addName3 = (obj, name, value) => ((obj[name] = value), obj);

////////////////////////////////////////////////////////////////////////////////
// The Object.entries() method returns an array of a given object's
const obj = {
  a: 'somestring',
  b: 42,
};
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

console.log(addName3({ piano: 500 }, 'Brutus', 300));

const obj2 = { foo: 'bar', baz: 42 };
const arr = Object.entries(obj2);
console.log(arr);
const arr2 = Object.fromEntries(arr);
console.log(arr2);
