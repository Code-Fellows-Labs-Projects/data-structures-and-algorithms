
const BinaryTree = require('../binary-tree.js');
const Node = require('../node.js');

describe('Testing Binary Tree', () => {

  it('Can instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toStrictEqual(null);
  });

  it('Can instantiate a tree with a single root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    expect(tree.root.value).toStrictEqual('A');
    expect(tree.root.right).toStrictEqual(null);
    expect(tree.root.left).toStrictEqual(null);
  });

  it('Can add a left child and right child to a single root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.right = new Node('C');
    expect(tree.root.value).toStrictEqual('A');
    expect(tree.root.left.value).toStrictEqual('B');
    expect(tree.root.right.value).toStrictEqual('C');
  });

  it('Can return a collection from a preorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.right = new Node('C');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right.left = new Node('F');
    expect(tree.preOrderHelper()).toStrictEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ]);
  });

  it('Can return a collection from a inorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.right = new Node('C');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right.left = new Node('F');
    expect(tree.inOrderHelper()).toStrictEqual([ 'D', 'B', 'E', 'A', 'F', 'C' ]);
  });

  it('Can return a collection from a postorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.right = new Node('C');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right.left = new Node('F');
    expect(tree.postOrderHelper()).toStrictEqual([ 'D', 'E', 'B', 'F', 'C', 'A' ]);
  });

  it('Can return the max value in binary tree', () => {
    const tree = new BinaryTree();
    tree.root = new Node(23);
    tree.root.left = new Node(8);
    tree.root.right = new Node(42);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(16);
    tree.root.right.left = new Node(27);
    expect(tree.findMaxHelper()).toStrictEqual(42);
  });

});
