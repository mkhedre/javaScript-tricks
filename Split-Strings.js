//Complete the solution so that it splits the string into pairs of two characters.
//If the string contains an odd number of characters
//then it should replace the missing second character of the final pair with an underscore ('_').

// split string into pairs of two characters
// if string contains odd number of characters push underscore to end of string
// return array of pairs of two characters
function solution(str) {
  str.length % 2 !== 0 ? (str += '_') : str;
  return str.split(/(?=(?:..)*$)/);
}

console.log(solution('abc')); // should return ['ab', 'c_']
