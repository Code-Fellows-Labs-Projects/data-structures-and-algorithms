'use strict';

const Queue = require('./queue.js');

function isMirror(tree){
  if(!tree.root)return true;
  if (!tree.root.left && !tree.root.right) return true;

  let current = tree.root;
  let queueLeft = new Queue();
  let queueRight = new Queue();

  queueLeft.enqueue(current.left);
  queueRight.enqueue(current.right);

  while(queueLeft.front){
    let currentLeft = queueLeft.dequeue();
    let currentRight = queueRight.dequeue();

    if (currentLeft.value !== currentRight.value){
      return false;
    }

    if(currentLeft.left && !(currentRight.right)) return false;
    if(currentLeft.right && !(currentRight.left)) return false;
    if(currentRight.right && !(currentLeft.left)) return false;
    if(currentRight.left && !(currentLeft.right)) return false;

    if (currentLeft.left && currentRight.right){
      queueLeft.enqueue(currentLeft.left);
      queueRight.enqueue(currentRight.right);
    }

    if (currentLeft.right && currentRight.left){
      queueLeft.enqueue(currentLeft.right);
      queueRight.enqueue(currentRight.left);
    }
  }
  return true;
}

module.exports = isMirror;
