# Reverse Linked-List

## Problem Domain

Reverse a Linked List.

## Inputs / Output

Input: `linked list`  
Output: 'reversed linked list head'

## Algorithm

- declare previous, current, and tempNext variables

- traverse through the linked list, saving a temporary next,  setting current.next to previous, and setting previous to current

- return the head of the reversed linked list


```plaintext

function reverseLL (linkedList)
   INPUT <-- linked list
   OUTPUT <-- head  of reversed linked list

  Current <-- Head
  Previous <-- Null
  Temp Next <-- Null

  WHILE Current is not NULL
    TempNext <-- Current.Next
    Current.Next <-- Previous
    Previous <-- Current
    Current <-- TempNext

  return Previous
```

## Solution Code

[index.js](./index.js)


## Tests

[Test Suite](./__tests__/reverseLL.test.js)