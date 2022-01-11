# Determine if a binary tree is a mirror

## Problem Domain

Given a binary tree of integers, write a function that determines if the tree is a mirror image. If the tree contains no nodes, return true. If the tree contains only a root node, return true.

## Inputs / Outputs

Input: `binary tree`
Output: `boolean`

## Algorithm

- if root does not exist, return true

- if tree only contains a root, return true

- declare current variable

- create a left queue and a right queue

- enqueue current.left into left queue

- enqueue current.right into right queue

- implement breadth first traversal 

  - loop while queueLeft.front exists (queueRight should be the same length as queueLeft so you could use  this as well)

  - dequeue left queue and set current left variable equal to the node dequeued

  - dequeue right queue and set current right variable equal to the node dequeued

  - if current left value does not equal current right return false 

  - if current left.left does not equal null but current right.right does, return false

  - if current left.right does not equal null but current right.left does, return false

  - if current right.right does not equal null but current left.left does, return false

  - if current right.left does not equal null but current left.right does, return false

  - if current left.left does not equal null and current right.right does not equal null, enqueue current left.left into the left queue and current right.right into the right queue

  - if current left.right does not equal null and current right.left does not equal null, enqueue current left.right into the left queue and current right.left into the right queue

- after breaking out of while loop, return true


## Efficiency

**time complexity: O(n)**
Breadth first traversal, requires us to touch every node in the tree, making the time complexity O(n) where n is the number of nodes in the tree.
 
**Space complexity: O(n)**
Breadth first traversal, requires us to store at least an entire level of the tree in the queue. Worst case, we may need to hold all the nodes in the queue, making the space complexity O(n) where n is the number of nodes in the tree.


## Solution Code

[Is Mirror](./mirror.js)  

## Tests

[Is Mirror Tests](./__tests__/mirror.test.js)  
 
