# Find the Closest Node in a Binary Search Tree

## Problem Domain

Given a binary search tree of integers and a target value, write a function that finds the node closest in value to the target value. If the tree contains no nodes, return null. If the tree contains only a root node, return that node's value.

## Inputs / Outputs

Input: `binary search tree root (node), target value (integer)`
Output: `node`

## Algorithm

- if tree root equals null, return null

- declare minDiff to equal the maximum numeric value in JS

- declare closestNode variable equal to null

- while node does not equal zero, continue looping

  - declare currentDiff equal to the absolute difference of the current node.value - targetValue

  - if currentDiff is less than minDiff, set minDiff to currentDiff and closestNode to current node

  - then traverse the BST

    - if targetValue is less than current node.value, traverse to the left

    - if targetValue is greater than current node.value, traverse to the right

- after breaking out of while loop, return the closestNode


## Efficiency

**time complexity: O(n)**
Worst case scenario in a left skewed tree or right skewed tree we would have to traverse through the entire tree, making the time complexity O(n) where n is the number of nodes in the tree.
 
**space complexity: O(1)**
This function uses memory to create and update the `minDiff`, `closestNode`, and `currentDiff` variables. These variables have a fixed-size instance regardless of the length of the input, making space complexity O(1) or constant.

## Solution Code

[Closest Node](./index.js)  

## Tests

[Closest Node Tests](./__tests__/closestNode.test.js)  
 
