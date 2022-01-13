'use strict';

const findLeaves = require('../findLeaves.js');
const BinaryTree = require('../binary-tree');
const Node = require('../node.js');

describe('Testing findLeaves Function', () => {

  it('Will return true if the binary tree is a mirror', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(2);
    tree.root.left.left = new Node(3);
    tree.root.right.right = new Node(3);
    tree.root.right.left = new Node(4);
    tree.root.left.right = new Node(4);
    expect(findLeaves(tree)).toStrictEqual(4);
  });

  it('Will return 0 if binary tree is empty', () => {
    const tree = new BinaryTree();
    expect(findLeaves(tree)).toStrictEqual(0);
  });

  it('Will return 1 if binary tree only contains a root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(35);
    expect(findLeaves(tree)).toStrictEqual(1);
  });
});

