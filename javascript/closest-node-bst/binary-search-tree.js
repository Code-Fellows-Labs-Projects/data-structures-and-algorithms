'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    try {
      if (!this.root) {
        this.root = new Node(value);
        return;
      }

      let current = this.root;

      while (current) {
        if (current.value === value) {
          throw 'No duplicates. Value already exists in tree';
        } else if (current.value < value) {
          if (!current.right) {
            current.right = new Node(value);
            break;
          }
          current = current.right;
        } else {
          if (!current.left) {
            current.left = new Node(value);
            break;
          }
          current = current.left;
        }
      }
    } catch (error) {
      throw `Unable to add a new node in the binary search tree: ${error}`;
    }
  }
}

module.exports = BinarySearchTree;
