/* eslint-disable */

/*
 *
 * From LeetCode's featured Arrays set
 * https://leetcode.com/problems/sort-array-by-parity/solution/
 *
 */

/*
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let start = 0;
  let end = A.length - 1;
  while (start < end) {
    if (A[start] % 2 === 1 && A[end] % 2 === 0) {
      [A[start], A[end]] = [A[end], A[start]];
    }
    if (A[start] % 2 === 0) {
      ++start;
    }
    if (A[start] % 2 === 1) {
      --end;
    }
  }
  return A;
};

let test = sortArrayByParity([3, 1, 2, 4]);
