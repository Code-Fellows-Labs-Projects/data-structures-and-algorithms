'use strict';

function isPalindrome(head) {
  let valuesArray = [];
  let current = head;

  if (!current) return false;

  // push all values into an array
  while(current){
    valuesArray.push(current.value);
    current = current.next;
  }

  let j = valuesArray.length -1;

  // iterate over half the array and compare front and back values
  for (let i = 0; i < valuesArray.length/2; i++){
    if (valuesArray[i] !== valuesArray[j]){
      return false;
    }
    j--;
  }
  return true;
}

module.exports = isPalindrome;
