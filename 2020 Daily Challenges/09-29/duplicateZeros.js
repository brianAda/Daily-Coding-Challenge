/* eslint-disable */

/*
 * Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
 *
 * Example:
 *   Input: [1, 0, 2, 3, 0, 4, 5, 0]
 * Output: null(array is modified to)[1, 0, 0, 2, 3, 0, 0, 4]
 *
 * From LeetCode featured set on Arrays: https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {

  // Iterate over array, count zeros, stop iterating when you reach length - number of zeros already found
  const length = arr.length;
  let zeroCount = 0;

  for (let i = 0; i < length - zeroCount; i++) {
    if (arr[i] === 0) {
      ++zeroCount;
    }
  }

  // pop x number of elements from end of array where x = number of zeros found: [1, 0, 2, 3, 0, 4]
  let popCount = 0;
  while (popCount < zeroCount) {
    arr.pop();
    ++popCount;
  }

  // Iterate over shortened array but use the original array length!
  for (let j = 0; j < length; j++) {
    if (arr[j] === 0) {
      // splice in another zero AND increment our index counter to avoid double-handling the zero
      arr.splice(j, 0, 0);
      ++j;
    }
  }
};

const test1 = duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
const test2 = duplicateZeros([1, 2, 3]);
