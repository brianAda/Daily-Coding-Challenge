/* eslint-disable */

/*
 *
 * From LeetCode featured set on Arrays: https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let descend = false;

  for (i = 0; i < A.length; i++) {
    // Confirm we initially ascended
    if (i === 0 && A[i] >= A[i + 1]) return false;

    // Initialize the descent
    if (A[i] > A[i + 1]) descend = true;

    // Confirm we didn't ascend after beginning a descent
    if (descend && A[i] <= A[i + 1]) return false;
  }

  // Mountain was detected if we descended without a subsequent ascent.
  return descend;
};

const test1 = validMountainArray([2, 1]);
const test2 = validMountainArray([3, 5, 5]);
const test3 = validMountainArray([0, 3, 2, 1]);


