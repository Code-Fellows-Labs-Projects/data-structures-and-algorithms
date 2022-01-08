'use strict';

// Require our linked list implementation
const { LinkedList, Node, reverseLL } = require('../index');


describe('Testing Linked List', () => {

  it('Can successfully reverse a linked list', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    expect(list.head.value).toStrictEqual(1);
    expect(reverseLL(list).value).toStrictEqual(3);
  });

  it('Can successfully reverse a linked list with one node', () => {
    const list = new LinkedList();
    list.head = new Node(1);
    expect(list.head.value).toStrictEqual(1);
    expect(reverseLL(list).value).toStrictEqual(1);
  });

  it('Will return null if linked list is empty', () => {
    const list = new LinkedList();
    expect(list.head).toStrictEqual(null);
    expect(reverseLL(list)).toStrictEqual(null);
  });

});




