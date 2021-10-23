'use strict';

// Require our linked list implementation
const { LinkedList, Node } = require('../index');


describe('Testing Linked List', () => {

  it('Can instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toStrictEqual(null);
  });

  it('Can insert a value to the head of a linked list', () => {
    const list = new LinkedList();
    list.head = new Node(10);
    list.insert(1027);
    expect(list.head.value).toStrictEqual(1027);
  });

  it('Will return true if value is present in linked list', () => {
    const list = new LinkedList();
    list.head = new Node(10);
    expect(list.includes(10)).toStrictEqual(true);
  });

  it('Will return false if value is not present in linked list', () => {
    const list = new LinkedList();
    list.head = new Node(25);
    expect(list.includes(225)).toStrictEqual(false);
  });

  it('Will return a collection of all values in linked list', () => {
    const list = new LinkedList();
    list.head = new Node(10);
    list.head.next = new Node(25);
    list.head.next.next = new Node(2);
    list.head.next.next.next = new Node(13);
    expect(list.toString()).toStrictEqual('{10} -> {25} -> {2} -> {13} -> NULL');
  });

  it('Head property points to the first node in linked list', () => {
    const list = new LinkedList();
    list.head = new Node(10);
    list.head.next = new Node(25);
    list.head.next.next = new Node(2);
    list.head.next.next.next = new Node(13);
    expect(list.head.value).toStrictEqual(10);
  });
});



