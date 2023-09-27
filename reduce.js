const friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
  },
];

const allBooks = friends.reduce((acc, curr) => {
  return acc.concat(curr.age);
}, []);
console.log(allBooks); // ['Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining']

const allBooks2 = friends.reduce(
  (previousvalue, currentvalue) => [...previousvalue, ...currentvalue.books],
  ['ilalamic']
);
console.log(allBooks2); // [ 'ilalamic', 'Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining']
