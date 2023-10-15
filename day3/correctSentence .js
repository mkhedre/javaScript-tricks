var correctSentence = (text) =>
  text[0].toUpperCase() + text.slice(1) + (text.endsWith('.') ? '' : '.');

var correctSentence = (t) =>
  t[0].toUpperCase() + t.slice(1) + (/\.$/.test(t) ? '' : '.');
