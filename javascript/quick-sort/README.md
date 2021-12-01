# Quick-Sort

## Problem Domain

Quick Sort is a function that takes in an unsorted array and sorts it in ascending order, by dividing the array into subarrays, using a pivot value to determine whether elements should be sorted to the left or right subarray.

## Blog Link

[Quick-Sort Blog](./BLOG.md)

## Inputs / Outputs

*sample input array*

`[8,4,23,42,16,15]`

*sample output array*

`[4,8,15,16,23,42]`


## Efficiency

divide-and-conquer algorithm

**Time: O(nlogn)** it takes n steps to partition the array, at log n times.

**Space: O(1)** Since it only swaps elements within the array and does not create subarrays, it uses O(1) space.

## Solution Code

[Quick-Sort](./quick-sort.js)


## Tests

[Quick-Sort Tests](./__tests__/quick-sort.test.js)  

