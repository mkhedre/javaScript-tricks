function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}
function addNAme2(obj, name, value) {
  return { ...obj, [name]: value };
}
console.log(addName({ piano: 500 }, 'Brutus', 300));
