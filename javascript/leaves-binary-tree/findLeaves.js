'use strict';

const Queue = require('./queue.js');

function findLeaves(tree){
  if (!tree.root) return 0;

  let current = tree.root;
  let leaves = 0;

  let queue = new Queue();
  queue.enqueue(current);

  while(queue.front){
    current = queue.dequeue();

    if(current.left){
      queue.enqueue(current.left);
    }

    if(current.right){
      queue.enqueue(current.right);
    }

    if(current.right === null && current.left === null){
      leaves++;
    }
  }
  return leaves;
}

module.exports = findLeaves;
