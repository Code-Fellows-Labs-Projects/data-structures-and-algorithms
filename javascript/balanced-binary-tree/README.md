# Determine if the Binary Tree is Height-Balanced

## Problem Domain

Given a binary tree, write a function that determines if the tree is height-balanced. In a height-balanced tree, the absolute difference between the height of the left and right subtree for every node is 0 or 1.

## Inputs / Outputs

Input: `binary tree root`  
Output: `boolean`

## Algorithm

- if the node equals null return -1

- declare left height to equal the recursive function call of isBalanced passing in node.left

- declare right height to equal the recursive function call of isBalanced passing in node.right

- declare heightDiff to equal the absolute difference of leftHeight and rightHeight.

- if heightDiff is greater than 1, the tree is not height balanced and the function returns false

- else return true

## Efficiency

**time complexity: O(n)**
We must visit each node in the tree to determine the height, making the time complexity O(n) where n is the number of nodes in the tree.
 
**space complexity: O(n)**
We call our function recursively for each node in the tree, making the space complexity O(n) where n is the number of nodes in the tree.


## Solution Code

[Is Balanced](./index.js)  

## Tests

[Is Balanced Tests](./__tests__/balanced.test.js)  
 
