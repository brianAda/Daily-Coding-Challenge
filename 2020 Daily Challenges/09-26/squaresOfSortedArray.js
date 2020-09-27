/* eslint-disable */

/*
 *
 * Given an array of integers A sorted in non - decreasing order, return an array of the squares of each number, also in sorted non - decreasing order.
 *
 * Example:
 *   Input: [-4, -1, 0, 3, 10]
 *   Output: [0, 1, 9, 16, 100]
 *
 * From LeetCode featured set on Arrays: https: //leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3240/
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let left = 0;
  let right = A.length - 1;
  let retArr = [];

  while (left <= right) {
    if (Math.abs(A[left]) >= Math.abs(A[right])) {
      retArr.push(A[left] ** 2);
      ++left;
    } else {
      retArr.push(A[right] ** 2);
      --right;
     }
  }
  return retArr.reverse();
};

sortedSquares([-4, -1, 0, 3, 10]); // [0, 1, 9, 16, 100]
sortedSquares([-7, -3, 2, 3, 11]); // [4, 9, 9, 49, 121]


// Time: O(n), Space: O(n)
