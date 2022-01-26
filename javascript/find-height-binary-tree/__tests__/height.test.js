'use strict';

const getHeight = require('../index.js');
const BinaryTree = require('../binary-tree');
const Node = require('../node.js');

describe('Testing getHeight Function', () => {

  it('Will return the height of a binary tree', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.right = new Node('C');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right.left = new Node('F');
    tree.root.right.left.left = new Node('G');
    tree.root.right.left.left.left = new Node('H');
    expect(getHeight(tree.root)).toStrictEqual(4);
  });

  it('Will return correct height if binary tree is empty', () => {
    const tree = new BinaryTree();
    expect(getHeight(tree.root)).toStrictEqual(-1);
  });

  it('Will return correct height if binary tree only contains a root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    expect(getHeight(tree.root)).toStrictEqual(0);
  });

});

