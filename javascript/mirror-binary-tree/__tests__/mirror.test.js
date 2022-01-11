'use strict';

const isMirror = require('../mirror.js');
const BinaryTree = require('../binary-tree');
const Node = require('../node.js');

describe('Testing isMirror Function', () => {

  it('Will return true if the binary tree is a mirror', () => {
    const tree = new BinaryTree();
    tree.root = new Node(35);
    tree.root.left = new Node(41);
    tree.root.right = new Node(41);
    tree.root.left.left = new Node(33);
    tree.root.right.right = new Node(33);
    tree.root.right.right.right = new Node(33);
    tree.root.left.left.left = new Node(33);
    expect(isMirror(tree)).toStrictEqual(true);
  });

  it('Will return true if binary tree is empty', () => {
    const tree = new BinaryTree();
    expect(isMirror(tree)).toStrictEqual(true);
  });

  it('Will return true if binary tree only contains a root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(35);
    expect(isMirror(tree)).toStrictEqual(true);
  });

  it('Will return false if binary tree is not a mirror', () => {
    const tree = new BinaryTree();
    tree.root = new Node(35);
    tree.root.left = new Node(41);
    tree.root.right = new Node(41);
    tree.root.left.left = new Node(33);
    expect(isMirror(tree)).toStrictEqual(false);
  });
});

