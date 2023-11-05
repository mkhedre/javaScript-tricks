// adfasdafs
// 1. loop for each char
// 2. i have now fisrt char and its index
// 3. seach for identicals ones for it and get the first one index

/**
 *
 * Catch an idea 💡! Store the current start of the substring and longest length in variables.
 * Create a map to store the latest index of every character.
 * Iterate over the given string,
 * update start position if necessary
 * (next index after the previous occurrence of the current character)
 * and calculate the length of unique characters.
 */

function longestSubstr(s) {
  let charIndex = {}; // Initialize an object to store the last seen index of each character.
  let left = 0; // Initialize the left pointer.
  let maxLength = 0; // Initialize the maximum length.

  for (let right = 0; right < s.length; right++) {
    // If the character is already in the object and its last seen index is greater
    // than or equal to the left pointer, update the left pointer to the next position.
    if (charIndex[s[right]] !== undefined && charIndex[s[right]] >= left) {
      left = charIndex[s[right]] + 1;
    }

    // Update the last seen index of the character.
    charIndex[s[right]] = right;

    // Calculate the current substring length.
    const currentLength = right - left + 1;

    // Update the maximum length if needed.
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

console.log('Example:');
console.log(longestSubstr('abcabcbb'));
