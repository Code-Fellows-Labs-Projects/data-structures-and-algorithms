'use strict';

function repeatedWord(string) {
  const words = string.split(/[ ,.?!]+/);
  let wordSet = new Set();

  for( let i = 0; i < words.length; i ++){
    if (wordSet.has(words[i].toLowerCase())){
      return words[i].toLowerCase();
    } else {
      wordSet.add(words[i].toLowerCase());
    }
  }
  return null;
}

module.exports = repeatedWord;
