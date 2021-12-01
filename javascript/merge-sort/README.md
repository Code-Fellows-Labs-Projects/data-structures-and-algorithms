# Merge-Sort

## Problem Domain

Merge Sort is a function that takes in an unsorted array and splits it in half until each subarray contains one element. Then, it merges the subarrays back together, in ascending order until a final sorted array is reached.

## Blog Link

[Merge-Sort Blog](./BLOG.md) 

## Inputs / Outputs

*sample input array*

`[8,4,23,42,16,15]`

*sample output array*

`[4,8,15,16,23,42]`


## Efficiency

divide-and-conquer algorithm

**Time: O(nlogn)** it takes n steps to merge arrays, log n times

**Space: O(n)** it usese n elements stored in arrays to merge, it uses O(n) space

## Solution Code

[Merge-Sort](./merge-sort.js)


## Tests

[Merge-Sort Tests](./__tests__/merge-sort.test.js)  

