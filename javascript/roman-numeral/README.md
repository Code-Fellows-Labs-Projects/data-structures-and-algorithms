# Convert Roman Numeral to Integer

## Problem Domain

Given a Roman numeral, create a function that will return the integer that corresponds to that Roman numeral. The input can be of any length. Assume that you will receive a valid input.

## Inputs / Outputs

Input: `Roman numeral string`   
Output: `integer`  

Input: `IV`  
Output: `4`

Input: `XV`  
Output: `15`

Input: `DCCXLIX`  
Output: `749`

## Algorithm

- declare a variable for total

- loop through the input string

  - set current variable to the value in romanNumeral object based on current letter in the input string

  - if you have reached the last character in the string, add it's value to the total

  - otherwise, set next variable to the value in romanNumeral object based on next letter in the input string  

  - if current is greater than or equal to next, add current to the total

  - if current is less than next, subtract it's value from the total

- return total


## Efficiency

**time complexity: O(n)**
Because we have to loop through the input string and touch each character, the time complexity is O(n) where n is the number of Roman numeral characters in the input string.
 
**space complexity: O(1)**
This function uses memory to create and update the `total`, `i`, `current`, and `next` variables. These variables have a fixed-size instance regardless of the length of the input, making space complexity O(1) or constant.

## Solution Code

[Convert Roman Numerals](./index.js)  

## Tests

[Convert Roman Numerals Tests](./__tests__/numeral.test.js)  
 
