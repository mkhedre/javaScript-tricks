//convert num to string then reverse it and compare reversed num to main num

//====================1=============
//n.toString().split('').reverse().join('')
//====================2===============
//var newString = "";
// for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
// }

//================3================ best
///  x % 10             123 %10 =3
// add it to temp num >> temp = 0 *10 + 123 %10 =3
// x /10                123/10 = 12 the repeat 1
const plandrome = (x) => {
  if (x < 0 || (x > 0 && x % 10 == 0)) {
    return false;
  }
  let reversedNum = 0;
  while (x > reversedNum) {
    reversedNum = reversedNum * 10 + parseInt(x % 10);
    console.log(reversedNum);
    console.log(x);
    x = ~~(x / 10);
    console.log(x);
  }

  return x == reversedNum || x == ~~(reversedNum / 10);
};
console.log(plandrome(100001));
