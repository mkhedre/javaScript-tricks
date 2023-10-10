function toTitleCase(sentence) {
  let arr = sentence.split(' ');
  let newArr = [];
  for (let char of arr) {
    newArr.push(char.charAt(0).toUpperCase() + char.substr(1).toLowerCase());
  }
  return newArr.join(' ');
}
