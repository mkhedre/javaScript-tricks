// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

const add_suffix = (suffix) => (prefix) => prefix + suffix;

// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"
