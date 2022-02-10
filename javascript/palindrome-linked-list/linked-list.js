'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert a value to the head with an O(1) Time performance
  insert(value) {
    try {
      let nodeToInsert = new Node(value);
      if (this.head === null) {
        this.head = nodeToInsert;
        this.tail = nodeToInsert;
      } else {
        nodeToInsert.next = this.head;
        this.head = nodeToInsert;
      }
    } catch (error) {
      throw `Unable to insert value into the head: ${error}`;
    }
  }

  // adds a new node with the given value to the end of the list
  append(value) {
    try {
      let current = this.head;
      let newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        while (current.next) {
          current = current.next;
        } current.next = new Node(value);
      }
    } catch (error) {
      throw `Unable to append value: ${error}`;
    }
  }

  // adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    try {
      if (this.head) {
        let current = this.head;
        let previous = null;
        while (current) {
          if (current.value === value) {
            let newNode = new Node(newValue);
            newNode.next = current;
            if (previous) {
              previous.next = newNode;
            } else {
              this.head = newNode;
            }
          }
          previous = current;
          current = current.next;
        }
      }
    } catch (error) {
      throw `Unable to add a new Node before the value specified: ${error}`;
    }
  }

  // adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    try {
      if (this.head) {
        let current = this.head;
        while (current) {
          if (current.value === value) {
            let saveRestOfList = current.next;
            let newNode = new Node(newValue);
            current.next = newNode;
            newNode.next = saveRestOfList;
          }
          current = current.next;
        }
      }
    } catch (error) {
      throw `Unable to add a new Node after the value specified: ${error}`;
    }
  }
}

module.exports = LinkedList;
