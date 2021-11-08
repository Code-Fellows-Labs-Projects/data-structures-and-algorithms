'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
    this.valuesArray = [];
  }

  // Pre-order: root >> left >> right
  preOrderTraversal(current) {
    this.valuesArray.push(current.value);

    if (current.left !== null) {
      this.preOrderTraversal(current.left);
    }

    if (current.right !== null) {
      this.preOrderTraversal(current.right);
    }
  }

  // returns array of values, ordered appropriately (pre-order)
  getPreOrder() {
    // clear out array
    this.valuesArray = [];

    this.preOrderTraversal(this.root);
    return this.valuesArray;
  }


  // In-order: left >> root >> right
  inOrderTraversal(current) {
    if (current.left !== null) {
      this.inOrderTraversal(current.left);
    }

    this.valuesArray.push(current.value);

    if (current.right !== null) {
      this.inOrderTraversal(current.right);
    }
  }

  // returns array of values, ordered appropriately (In-order)
  getInOrder() {
    // clear out array
    this.valuesArray = [];

    this.inOrderTraversal(this.root);
    return this.valuesArray;
  }

  // Post-order: left >> right >> root
  postOrderTraversal(current) {
    if (current.left !== null) {
      this.postOrderTraversal(current.left);
    }

    if (current.right !== null) {
      this.postOrderTraversal(current.right);
    }

    this.valuesArray.push(current.value);
  }

  // returns array of values, ordered appropriately (Post-order)
  getPostOrder() {
    // clear out array
    this.valuesArray = [];

    this.postOrderTraversal(this.root);
    return this.valuesArray;
  }
}

module.exports = BinaryTree;
