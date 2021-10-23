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

  traverseLLIterative() {
    try {
      let current = this.head;
      while (current) {
        current = current.next;
      }
    } catch (error) {
      console.log('Unable to iteratively traverse LinkedList: ', error);
    }
  }

  traverseLLRecursive() {
    try {
      let current = this.head;
      // recursive case
      if (current) {
        console.log(current);
        traverseLLRecursive(current.next);
      } return; // base case
    } catch (error) {
      console.log('Unable to recursively traverse LinkedList: ', error);
    }
  }

  // insert a value to the head with an O(1) Time performance
  insert(value) {
    try {
      let nodeToInsert = new Node(value);
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
    } catch (error) {
      console.log('Unable to insert value into the head: ', error);
    }
  }

  // indicates whether that value exists within the list and return true or false
  includes(value) {
    try {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    } catch (error) {
      console.log('Unable to search for value in LinkedList: ', error);
    }
  }

  // returns all the values as a string
  toString() {
    try {
      let current = this.head;
      let string = '';
      while (current) {
        string += `{${current.value}} -> `;
        current = current.next;
      } return string += 'NULL';
    } catch (error) {
      console.log('Unable to return LinkedList values as a string: ', error);
    }
  }
}



module.exports = {
  LinkedList,
  Node
};
