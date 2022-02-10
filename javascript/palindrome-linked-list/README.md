# Palindrome Linked List

## Problem Domain
Given the head of a singly linked list, return true if it is a palindrome.

## Inputs / Outputs

Input: `linked list`  
Output: `boolean`

*sample input/outputs*

```
Input: head = [2,3,3,2]
Output: true

Input: head = [1,5]
Output: false

```

## Algorithm

- create an empty values array

- set current variable equal to the LL head

- if the LL is empty, return false

- traverse the LL while current does not equal null, push current.value into the values array and set current equal to current.next to increment the while loop

- declare j variable equal to the last index of the values array

- iterate over half the values array, comparing the first index with the last moving inward

  - if at any point the two values don't match, return false

- break out of the for loop and return true

## Efficiency

**time complexity: O(n)**  
First we traverse through the linked list touching each node and pushing their values into an array (this takes O(n) time). Then we iterate over half the array comparing front and back values (this takes O(1/2n) time). Since we drop constants with big O, the time complexity is O(n) where n is the number of nodes in the linked list.
 
**space complexity: O(n)**  
Since we create an array element for each node in the linked list, our space complexity is O(n) where n is the number of nodes in the linked list.

## Solution Code

[Palindrome Linked List](./index.js)


## Tests

[Palindrome Linked List Test Suite](./__tests__/palindromeLL.test.js)