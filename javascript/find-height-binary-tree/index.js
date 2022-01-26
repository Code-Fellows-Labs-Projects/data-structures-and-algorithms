'use strict';

function getHeight(node) {
  if (node === null){
    return -1;
  }
  let leftHeight = getHeight(node.left);
  let rightHeight = getHeight(node.right);
  return Math.max(leftHeight,rightHeight) + 1;
}

module.exports = getHeight;
