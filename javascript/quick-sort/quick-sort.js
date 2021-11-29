'use strict';

function quickSort(array, start, end) {
  if (start < end) {
    // set position of pivot value
    let position = partition(array, start, end);
    // sort the left side
    quickSort(array, start, position - 1);
    // sort the right side
    quickSort(array, position + 1, end);
  }
  return array;
}

function partition(array, start, end) {
  // set the pivot value to the last element
  let pivotValue = array[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      // swap elements
      swap(array, i, pivotIndex);
      // move to the next element
      pivotIndex++;
    }
  }
  // Put the pivot value in the middle of both sides and swap values with the element at that index
  let temp = array[pivotIndex];
  array[pivotIndex] = array[end];
  array[end] = temp;
  return pivotIndex;
}

function swap(array, i, pivotIndex) {
  let temp = array[i];
  array[i] = array[pivotIndex];
  array[pivotIndex] = temp;
}

module.exports = quickSort;
