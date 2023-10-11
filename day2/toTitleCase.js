function toTitleCase(sentence) {
  let arr = sentence.split(' ');
  let newArr = [];
  for (let char of arr) {
    newArr.push(char.charAt(0).toUpperCase() + char.substr(1).toLowerCase());
  }
  return newArr.join(' ');
}

function toTitleCase(sentence) {
  return sentence
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function toTitleCase(sentence) {
  return sentence.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  // \b\w means any word boundary followed by any word character
  //    return sentence.toLowerCase().replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
  // \^|\s This part of the regex matches the start of the string (^) or a space (\s),
  // \S means any non-whitespace character
}
