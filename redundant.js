function redundant(str) {
  // clousure   to keep the value of the last index
  function display() {
    console.log(str);
  }
  return display;
}

const f1 = redundant('abc');
f1();
