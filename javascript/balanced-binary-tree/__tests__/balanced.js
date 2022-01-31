'use strict';

const isBalanced = require('../index.js');
const BinaryTree = require('../binary-tree');
const Node = require('../node.js');

describe('Testing isBalanced Function', () => {

  it('Will return true if the binary tree is height balanced', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(2);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(4);
    tree.root.right.left = new Node(4);
    tree.root.right.right = new Node(3);
    tree.root.left.left.left = new Node(5);
    expect(isBalanced(tree.root)).toStrictEqual(true);
  });

  it('Will return false if the binary tree is NOT height balanced', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(4);
    tree.root.left.left.left = new Node(5);
    expect(isBalanced(tree.root)).toStrictEqual(false);
  });

  it('Will return -1 if the binary tree is empty', () => {
    const tree = new BinaryTree();
    expect(isBalanced(tree.root)).toStrictEqual(-1);
  });

  it('Will return true if binary tree only contains a root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    expect(isBalanced(tree.root)).toStrictEqual(true);
  });

});

