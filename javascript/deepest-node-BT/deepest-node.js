'use strict';

const Queue = require('./queue.js');

function findDeepestNode(tree) {
  if (!tree.root) return null;

  let current = null;
  let queue = new Queue();
  queue.enqueue(tree.root);

  while (queue.front) {
    current = queue.dequeue();

    if (current.left) {
      queue.enqueue(current.left);
    }

    if (current.right) {
      queue.enqueue(current.right);
    }

  }
  return current.value;
}

module.exports = findDeepestNode;
