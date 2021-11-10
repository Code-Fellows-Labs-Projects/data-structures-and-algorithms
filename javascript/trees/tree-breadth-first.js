'use strict';

const Queue = require('./queue.js');

function breadthFirst(tree){
  if(!tree.root){
    throw 'tree is empty';
  }
  let valuesArray = [];
  let breadthQueue = new Queue();
  breadthQueue.enqueue(tree.root);

  while(breadthQueue.front){
    let front = breadthQueue.dequeue();
    valuesArray.push(front.value);

    if (front.left){
      breadthQueue.enqueue(front.left);
    }

    if (front.right){
      breadthQueue.enqueue(front.right);
    }
  }
  return valuesArray;
}

module.exports = breadthFirst;

