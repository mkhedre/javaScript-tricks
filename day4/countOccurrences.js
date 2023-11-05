function countOccurrences(mainStr, subStr) {
  var re = new RegExp(subStr, 'ig');
  return mainStr.match(re) ? mainStr.match(re).length : 0;
}
