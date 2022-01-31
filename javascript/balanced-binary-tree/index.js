'use strict';

function isBalanced(node) {
  if (node === null){
    return -1;
  }

  let leftHeight = isBalanced(node.left);
  let rightHeight = isBalanced(node.right);
  let heightDiff = Math.abs(leftHeight - rightHeight);

  if (heightDiff > 1) {
    return false;
  } else {
    return true;
  }

  // return Math.max(leftHeight,rightHeight) + 1; (this would return actual height of tree rather than a boolean)
}

module.exports = isBalanced;
