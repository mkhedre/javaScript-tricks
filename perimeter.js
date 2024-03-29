//letter l, number num)
// s -> square
// c -> circle
// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
const perimeter0 = (l, num) => (l === 's' ? 4 * num : 6.28 * num);

const perimeter = (l, num) => {
  return (4 * (l == 's') + 6.28 * (l == 'c')) * num;
};
let perimeter2 = (l, n) => (l == 's' && n * 4) || n * 6.28;

console.log(perimeter0('s', 6));
