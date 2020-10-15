/* eslint-disable */

/*
 *
 * From LeetCode's featured Arrays set
 * https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3259/
 *
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let prev = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = prev;
    prev = Math.max(prev, curr);
  }
  return arr;
};

const test1 = replaceElements([17, 18, 5, 4, 6, 1]); // [18, 6, 6, 6, 1, -1]
const test2 = replaceElements([1, 2, 3, 4]); // [4, 4, 4, -1]
const test3 = replaceElements([4, 3, 2, 1]); // [3, 2, 1, -1]
const test4 = replaceElements([3, 3, 3]); // [3, 3, -1]
