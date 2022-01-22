'use strict';

const returnInteger = require('../index.js');


describe('Testing Roman numeral conversion Function', () => {

  it('Will return correct integer that corresponds with the Roman numeral string', () => {
    let string1 = 'IV';
    let string2 = 'XV';
    let string3 = 'DCCXLIX';
    expect(returnInteger(string1)).toStrictEqual(4);
    expect(returnInteger(string2)).toStrictEqual(15);
    expect(returnInteger(string3)).toStrictEqual(749);
  });

  it('Will return correct integer for a Roman numeral string with one character', () => {
    let string = 'V';
    expect(returnInteger(string)).toStrictEqual(5);
  });

  it('Will return correct integer for a Roman numeral string with more than 8 characters', () => {
    let string = 'DCCLXXXIX';
    expect(returnInteger(string)).toStrictEqual(789);
  });
});

