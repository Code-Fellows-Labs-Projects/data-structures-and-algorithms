# Binary Tree

## Problem Domain

Created a binary tree class with 3 depth traversal methods (pre-order, in-order, post-order) and a find max value method. Created a binary search tree subclass with add and contains methods that respectively add a new node to the appropriate place in the search tree and search to see if the tree contains a node with a given value. Includes comprehensive test suites for all methods.  

## Inputs / Outputs

### Binary Tree   

**PreOrder Traversal Method**

Input: binary tree root
Output: none

**PreOrder Helper Method**

Input: none
Output: array of values, ordered appropriately (pre-order)

**InOrder Traversal Method**

Input: binary tree root
Output: none

**InOrder Helper Method**

Input: none
Output: array of values, ordered appropriately (in-order)

**PostOrder Traversal Method**

Input: binary tree root
Output: none

**PostOrder Helper Method**

Input: none
Output: array of values, ordered appropriately (post-order)

**Get PostOrder Traversal Method**

Input: none
Output: array of values, ordered appropriately (post-order)

**FindMax Method**

Input: binary tree root
Output: none

**FindMax Helper Method**

Input: none
Output: max value in binary tree

### Binary Search Tree   

**Add Method**

Input: value to create a new node
Output: none

**Contains Method**

Input: value to search
Output: boolean

## Efficiency

* All 3 depth traversal methods utilize recursion and have an O(n) time efficiency.

* The binary tree find max is a recursive method and utilizes 0(n) time complexity and O(n) space complexity. If tree has n nodes worst case you will have to search the entire tree.

* The binary search tree add and search methods are O(h) O(height) time complexity. The search method is O(1) space complexity.  

## Solution Code

[Binary Tree](./binary-tree.js)  
[Binary Search Tree](./binary-search-tree.js)


## Tests

[Binary Tree Tests](./__tests__/binary-tree.test.js)  
[Binary Search Tree Tests](./__tests__/binary-search.test.js)

