'use strict';

const findClosest = require('../index.js');
const BinarySearchTree = require('../binary-search-tree');
const Node = require('../node.js');

describe('Testing findClosest Function', () => {

  it('Will return the closest node in the binary search tree', () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(23);
    let closestNode1 = tree.root.left = new Node(8);
    tree.root.right = new Node(42);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(16);
    let closestNode2 = tree.root.right.left = new Node(27);
    expect(findClosest(tree.root, 7)).toStrictEqual(closestNode1);
    expect(findClosest(tree.root, 26)).toStrictEqual(closestNode2);
  });

  it('Will return null if binary search tree is empty', () => {
    const tree = new BinarySearchTree();
    expect(findClosest(tree.root, 26)).toStrictEqual(null);
  });

  it('Will return the closest node if binary search tree only contains a root node', () => {
    const tree = new BinarySearchTree();
    let closestNode = tree.root = new Node(23);
    expect(findClosest(tree.root, 26)).toStrictEqual(closestNode);
  });
});

