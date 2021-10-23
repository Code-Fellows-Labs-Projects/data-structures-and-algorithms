# Linked-List

## Problem Domain
Create a Linked List. The class should contain an insert method (which adds a new node to the head of the linked list), an includes method (which indicates whether a value exists within the linked list), and a toString method (which returns a string representing the values in the linked list). Includes semantic error catching and test suite.

## Inputs / Outputs

**Insert Method**

Input: `value`  
Output: none

**Includes Method**

Input: `value`  
Output: `boolean`

**To String Method**

Input: none
Output: `"{ a } -> { b } -> { c } -> NULL"`


## Algorithm

**Insert Method**

- create a new node with the value passed in as a parameter

- set the next property of the new node as the current head (saves the reference to the current linked list)

- set the head to equal the new node created

**Includes Method**

- set the current node to equal the head

- loop while current is not null

- inside the while loop, if current.value equals the search value return true

- set current to equal current.next to continue traversing the linked list

- EDGE CASE: outside of while loop return false

**To String Method**

- set the current node to equal the head

- declare an empty string variable

- loop while current is not null

- add to the empty string variable with the current nodes value

- once outside of loop add a final value of null to the string

## Pseudocode

**Insert Method**

```plaintext

function insert (Value)
// INPUT <-- Value to add
// OUTPUT <-- No output 

  newNode <-- NEW Node
  newNode.Value <-- Value
  newNode.Next <-- Head
  Head <-- newNode
```


**Includes Method**

```plaintext

function includes (searchValue)
   INPUT <-- searchValue
   OUTPUT <-- boolean

  Current <-- Head

  WHILE Current is not NULL
    IF Current.Value is equal to searchValue
      return TRUE

    Current <-- Current.Next

  return FALSE
```

**To String Method**

```plaintext

function toString()
// INPUT <-- None
// OUTPUT <-- string 

  Current <-- Head

  WHILE Current is not equal to NULL
    OUTPUT <-- "{Current.Value} --> "
    Current <-- Current.Next

  OUTPUT <-- "NULL"
  ```


## Solution Code

[index.js](./index.js)


## Tests

[Test Suite](./__tests__/linked-list.test.js)