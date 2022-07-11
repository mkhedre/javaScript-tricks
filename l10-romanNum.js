const obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
var romanToInt = function (s) {
  let b = 0;
  s.split("").map((x) => (b += obj[x]));
  console.log(b);
};
romanToInt("XXVII");
