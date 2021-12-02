'use strict';

const repeatedWord = require('../index');

describe('Testing Repeated-Word Function', () => {

  it('Can find the first repeated word in a string ', () => {
    let string = 'Once upon a time, there was a brave princess who...';
    let string2 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    expect(repeatedWord(string)).toStrictEqual('a');
    expect(repeatedWord(string2)).toStrictEqual('summer');
  });

  it('Can find the first repeated word, even if one is capitalized', () => {
    let string = 'It was a queer, sultry Summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(string)).toBe('summer');
  });

  it('Can find the first repeated word even if there is punctuation before the word', () => {
    let string = 'Once upon ?a time, there was a brave princess who...';
    expect(repeatedWord(string)).toBe('a');
  });

  it('Will return null if there are no repeated words ', () => {
    let string = 'Once upon a time, there was brave princess who...';
    let string2 = 'It was a queer, sultry summer, the day they electrocuted...';

    expect(repeatedWord(string)).toStrictEqual(null);
    expect(repeatedWord(string2)).toStrictEqual(null);
  });

});




