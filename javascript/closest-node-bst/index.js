'use strict';

function findClosest (node, targetValue){
  if (node === null) return null;
  let minDiff = Number.MAX_VALUE;
  let closestNode = null;

  while(node){
    let currentDiff = Math.abs(node.value - targetValue);

    if (currentDiff < minDiff){
      minDiff = currentDiff;
      closestNode = node;
    }

    // traverse the BST
    if(targetValue < node.value){
      node = node.left;
    } else if (targetValue > node.value){
      node = node.right;
    } else {
      break;
    }
  }
  return closestNode;
}

module.exports = findClosest;
