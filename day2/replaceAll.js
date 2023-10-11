function replaceAll(mainText, target, repl) {
  mainText.includes(target)
    ? (mainText = mainText.replaceAll(target, repl))
    : (mainText = mainText);
  return mainText;
  // main one word
  //    let arr = main.split(' ')
  //    arr.length == 1 ? arr = main.split('') : arr = arr
  //    let newMain = []
  //    arr.map(word => {
  //         word == target ? newMain.push(repl) : newMain.push(word)
  //     })
  //     return newMain.join(' ')
}

/**
 *
 * replaceAll("hello world", "world", "TypeScript"),
 * loop main >> word in main === target >> replace with repl
 * return main
 */
