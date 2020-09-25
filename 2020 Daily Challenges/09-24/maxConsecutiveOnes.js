/* eslint-disable */

/*
 * Given a binary array, find the maximum number of consecutive 1 s in this array.
 *
 * Example:
 *   Input: [1, 1, 0, 1, 1, 1]
 *   Output: 3
 *
 * Note:
 *   The input array will only contain 0 and 1.
 *   The length of input array is a positive integer and will not exceed 10, 000
 *
 * From LeetCode featured set on Arrays: https:leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3238/
 *
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
// Naive / Brute force O(n) Time, O(1) Space
var findMaxConsecutiveOnes = function (nums) {
  let counter = 0;
  let currMax = 0;
  nums.forEach(curr => {
    if (curr === 1) {
      ++counter;
      currMax = Math.max(currMax, counter);
    } else {
      counter = 0;
    }
  });
  return currMax;
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
