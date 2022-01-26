# Find the Height of a Binary Tree

## Problem Domain

Given a binary tree, write a function that determines the height of the tree.

## Inputs / Outputs

Input: `binary tree root`  
Output: `integer`

## Algorithm

- if the node equals null return -1

- declare left height to equal the recursive function call of getheight passing in node.left

- declare right height to equal the recursive function call of getheight passing in node.right

- return the max of left height and right height and add 1 to it (to account for the height of the root)

## Efficiency

**time complexity: O(n)**
We must visit each node in the tree to determine the height, making the time complexity O(n) where n is the number of nodes in the tree.
 
**space complexity: O(n)**
We call our function recursively for each node in the tree, making the space complexity O(n) where n is the number of nodes in the tree.


## Solution Code

[Find Height](./index.js)  

## Tests

[Find Height Tests](./__tests__/height.test.js)  
 
