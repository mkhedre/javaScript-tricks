var correctSentence = (text) =>
  text[0].toUpperCase() + text.slice(1) + (text.endsWith('.') ? '' : '.');
