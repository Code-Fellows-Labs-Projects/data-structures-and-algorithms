'use strict';

let romanNumeral = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function returnInteger(string) {
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    let current = romanNumeral[string[i]];

    if (i >= string.length - 1) {
      total += current;
    }

    if (i < string.length - 1) {
      let next = romanNumeral[string[i + 1]];

      if (current >= next) {
        total += current;
      }
      if (current < next) {
        total = total - current;
      }
    }
  }
  return total;
}


module.exports = returnInteger;
