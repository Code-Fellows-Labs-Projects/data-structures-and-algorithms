'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  // Pre-order: root >> left >> right
  preOrderTraversal(root){
    console.log(root.value);

    if (root.left !== null){
      this.preOrderTraversal(root.left);
    }

    if (root.right !== null){
      this.preOrderTraversal(root.right);
    }
  }
  // In-order: left >> root >> right
  inOrderTraversal(){
    
  }
  // Post-order: left >> right >> root
  postOrderTraversal(){
    
  }


// post order which returns an array of the values, ordered appropriately.
}

