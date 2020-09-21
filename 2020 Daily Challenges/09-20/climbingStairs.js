/* eslint-disable */

/*
 * You are climbing a staircase. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?
 *
 * Constaints: 1 <= n <= 45
 *
 * From LeetCode featured set on Recursion: https: //leetcode.com/explore/featured/card/recursion-i/255/recursion-memoization/1662/
 * 
 */


// Recursive solution: Performs repeat calculations
// Time: O(n) Space: O(n^2)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function (n) {
  if (n <= 3) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

//Solution using memoization
// Time: O(n) Space: O(n)
var climbStairs = function (n) {
  let cache = {};

  function memoize(n) {
    if (n <= 3) {
      return n;
    }

    if (cache[n] === undefined) {
      cache[n] = memoize(n - 1) + memoize(n - 2);
    }

    return cache[n];
  }
  return memoize(n);

}

const one = climbStairs(1); //1
const two = climbStairs(2); //2
const three = climbStairs(3); //3
const five = climbStairs(5); //8
