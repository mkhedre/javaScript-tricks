//  more than way to search for a digit in a array
// 1. regex
const sevenBoom = (arr) =>
  /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';

// 2. indexOf method with join
const sevenBoom2 = (arr) =>
  arr.join('').indexOf('7') >= 0 ? 'Boom!' : 'there is no 7 in the array';

// 3. inclides method with join
const sevenBoom3 = function (arr) {
  return arr.join().includes('7') ? 'Boom!' : 'there is no 7 in the array';
};

// 4. toString method
const sevenBoom4 = (arr) => {
  return arr.toString().includes(7) ? 'Boom!' : 'there is no 7 in the array';
};

sevenBoom([1, 2, 3, 4, 5, 6, 7]); // 'Boom!'
sevenBoom([1, 2, 3, 4, 5, 6, 8]); // 'there is no 7 in the array'
sevenBoom1([8, 6, 7, 5, 3, 2, 1]); // 'Boom!'
sevenBoom2([1, 2, 3, 4, 5, 6, 7]); // 'Boom!'
sevenBoom3([1, 2, 3, 4, 5, 6, 7]); // 'Boom!'
sevenBoom4([1, 2, 3, 4, 5, 6, 7]); // 'Boom!'
