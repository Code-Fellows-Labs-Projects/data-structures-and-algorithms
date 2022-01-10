'use strict';

const findDeepestNode = require('../deepest-node.js');
const BinaryTree = require('../binary-tree');
const Node = require('../node.js');

describe('Testing Deepest Node Function', () => {

  it('Will successfully find the deepest node in a binary tree', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(6);
    tree.root.right.right.right = new Node(7);
    expect(findDeepestNode(tree)).toStrictEqual(7);
  });

  it('Will return null if binary tree is empty', () => {
    const tree = new BinaryTree();
    expect(findDeepestNode(tree)).toStrictEqual(null);
  });

  it('Will return the root if binary tree contains only one node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    expect(findDeepestNode(tree)).toStrictEqual(1);
  });

  it('Will successfully find the deepest node in a binary tree', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(6);
    tree.root.left.left.left = new Node(7);
    tree.root.right.left.left = new Node(8);
    tree.root.right.right.right = new Node(9);
    expect(findDeepestNode(tree)).toStrictEqual(9);
  });
});

