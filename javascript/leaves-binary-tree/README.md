# Find the Leaf Node Count in a Binary Tree

## Problem Domain

Given a binary tree, write a function that counts the number of leaf nodes it contains. If the tree is empty, return 0.

## Inputs / Outputs

Input: `binary tree`
Output: `integer`

## Algorithm

- if the tree is empty, return 0

- declare current variable as root and leaves count as 0

- create a queue and enqueue the root

- implement breadth first traversal 

  - loop while queue.front exists

  - dequeue and set current variable equal to the node dequeued

  - if the current node has a left property, enqueue it

  - if the current node has a right property, enqueue it

  - if the current right and current left both equal null (this indicates you've reached a leaf node), increment the leaf count

- after breaking out of while loop, return the leaf count

## Efficiency

**time complexity: O(n)**
Breadth first traversal, requires us to touch every node in the tree, making the time complexity O(n) where n is the number of nodes in the tree.
 
**Space complexity: O(n)**
Breadth first traversal, requires us to store at least an entire level of the tree in the queue. Worst case, we may need to hold all the nodes in the queue, making the space complexity O(n) where n is the number of nodes in the tree.


## Solution Code

[Find Leaves](./findLeaves.js)  

## Tests

[Find Leaves Tests](./__tests__/leaves.test.js)  
 
