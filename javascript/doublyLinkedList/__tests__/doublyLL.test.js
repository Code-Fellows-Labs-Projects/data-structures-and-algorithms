'use strict';

const { DoublyLinkedList, Node } = require('../index');


describe('Testing Doubly Linked List', () => {

  it('Can instantiate an empty linked list', () => {
    const doublyLL = new DoublyLinkedList();
    expect(doublyLL.head).toStrictEqual(null);
  });

  it('Can add a node to a doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.push(3);
    expect(doublyLL.head.value).toStrictEqual(1);
    expect(doublyLL.tail.value).toStrictEqual(3);
    expect(doublyLL.length).toStrictEqual(3);
  });

  it('Can remove a node from the end of a doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.push(3);
    doublyLL.pop();
    expect(doublyLL.tail.value).toStrictEqual(2);
    expect(doublyLL.length).toStrictEqual(2);
  });

  it('Can remove a node from a doubly linked list containing only one node', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.pop();
    expect(doublyLL.head).toStrictEqual(null);
    expect(doublyLL.tail).toStrictEqual(null);
    expect(doublyLL.length).toStrictEqual(0);
  });

  it('Will return null if pop() is used on an empty LL', () => {
    const doublyLL = new DoublyLinkedList();
    expect(doublyLL.pop()).toStrictEqual(null);
  });

  it('Can insert a node to the head of an empty doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.unshift(1);
    expect(doublyLL.head.value).toStrictEqual(1);
  });

  it('Can insert a node to the head of a doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.unshift(4);
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.push(3);
    expect(doublyLL.head.value).toStrictEqual(4);
    expect(doublyLL.length).toStrictEqual(4);
  });

  it('Can remove a node from the head of a doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.push(3);
    doublyLL.shift();
    expect(doublyLL.head.value).toStrictEqual(2);
    expect(doublyLL.length).toStrictEqual(2);
  });

  it('Will return null when trying to remove the head of an empty linked list', () => {
    const doublyLL = new DoublyLinkedList();
    expect(doublyLL.shift()).toStrictEqual(null);
    expect(doublyLL.length).toStrictEqual(0);
  });

  it('Can get a node at a given index within a doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.push(3);
    expect(doublyLL.get(1).value).toStrictEqual(2);
  });

  it('Will return null if a given index within a doubly linked list does not exist', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.push(3);
    expect(doublyLL.get(5)).toStrictEqual(null);
  });

  it('Can change the value of a node at a given index', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.set(3,1);
    expect(doublyLL.tail.value).toStrictEqual(3);
    expect(doublyLL.length).toStrictEqual(2);
  });

  it('Will return false if index parameter in set method does not exist within the linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    expect(doublyLL.set(3,5)).toStrictEqual(false);
  });

  it('Can insert a node into an empty doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.insert(1,0);
    expect(doublyLL.head.value).toStrictEqual(1);
    expect(doublyLL.tail.value).toStrictEqual(1);
    expect(doublyLL.length).toStrictEqual(1);
  });

  it('Can insert a node into a doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.insert(4,1);
    expect(doublyLL.get(1).value).toStrictEqual(4);
    expect(doublyLL.length).toStrictEqual(3);
  });

  it('Will return null if index parameter in insert method does not exist within the linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    expect(doublyLL.insert(4,4)).toStrictEqual(null);
  });

  it('Can remove a node from a doubly linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    doublyLL.remove(1);
    expect(doublyLL.tail.value).toStrictEqual(1);
    expect(doublyLL.length).toStrictEqual(1);
  });

  it('Will return null if index parameter in remove method does not exist within the linked list', () => {
    const doublyLL = new DoublyLinkedList();
    doublyLL.push(1);
    doublyLL.push(2);
    expect(doublyLL.remove(4)).toStrictEqual(null);
  });

});




