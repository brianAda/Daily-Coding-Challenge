/* eslint-disable */

/*
 * Implement pow(x, n), which calculates x raised to the power n(i.e.xn).
 *
 * Example:
 *   Input: x = 2.00000, n = 10
 *   Output: 1024.00000
 *
 * From LeetCode featured set on Recursion: https://leetcode.com/explore/featured/card/recursion-i/256/complexity-analysis/2380/
 */

// Naive solution, Time: O(n), Space: O(1)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  let pow = Math.abs(n);
  let result;

  if (pow % 2 === 0) {
    result = myPow(x * x, pow / 2)
  } else {
    result = myPow(x * x, (pow - 1) / 2) * x;
  }

  return n < 0 ? 1 / result : result;
};

const test1 = myPow(2, 10); // 1024
const test2 = myPow(2.1, 3); // 9.261
const test3 = myPow(2, -2); // 0.25
