function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}
function addNAme2(obj, name, value) {
  return { ...obj, [name]: value };
}
const addName3 = (obj, name, value) => ((obj[name] = value), obj);
console.log(addName3({ piano: 500 }, 'Brutus', 300));
