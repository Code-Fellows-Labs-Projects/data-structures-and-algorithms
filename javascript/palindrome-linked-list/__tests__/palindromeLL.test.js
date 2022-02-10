'use strict';

const LinkedList = require('../linked-list.js');
const isPalindrome = require('../index.js');


describe('Testing isPalindrome Function', () => {

  it('Will return true if linked list is a palindrome', () => {
    const list = new LinkedList();
    list.append(2);
    list.append(3);
    list.append(3);
    list.append(2);
    expect(isPalindrome(list.head)).toStrictEqual(true);
  });

  it('Will return false if linked list is NOT a palindrome', () => {
    const list = new LinkedList();
    list.append(2);
    list.append(3);
    expect(isPalindrome(list.head)).toStrictEqual(false);
  });

  it('Will return true if linked list contains only a head', () => {
    const list = new LinkedList();
    list.append(2);
    expect(isPalindrome(list.head)).toStrictEqual(true);
  });

  it('Will return false if linked list is empty', () => {
    const list = new LinkedList();
    expect(isPalindrome(list.head)).toStrictEqual(false);
  });
});




