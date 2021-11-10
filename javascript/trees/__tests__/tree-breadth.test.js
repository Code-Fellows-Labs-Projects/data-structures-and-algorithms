'use strict';

const breadthFirst = require('../tree-breadth-first.js');
const BinaryTree = require('../binary-tree.js');
const Node = require('../node.js');

describe('Testing Binary Tree', () => {
  it('Function can return a collection from a breadth traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.right = new Node('C');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right.left = new Node('F');
    expect(breadthFirst(tree)).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});

