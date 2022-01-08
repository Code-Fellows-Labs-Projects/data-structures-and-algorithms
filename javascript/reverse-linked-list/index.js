'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

function reverseLL (linkedList) {
  if (!linkedList.head) return null;

  let previous = null;
  let current = linkedList.head;
  let tempNext = null;

  while (current){
    tempNext = current.next;
    current.next = previous;
    previous = current;
    current = tempNext;
  }
  return previous;
}

module.exports = {
  LinkedList,
  Node,
  reverseLL,
};
