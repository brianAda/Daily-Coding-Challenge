/* eslint-disable */

/*
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
 *
 * Given N, calculate F(N).
 *
 * From LeetCode featured set on Recursion: https://leetcode.com/explore/featured/card/recursion-i/255/recursion-memoization/1661/
 */

/**
 * @param {number} N
 * @return {number}
 */

// Non-optimal -- uses duplicate calculations, implement with memoizatin.
const fib2 = function (n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// Solution with memoization
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

var fib = function (n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  memo.set(n, fib(n - 1) + fib(n - 2));
  return memo.get(n);
};

// Test cases
const zero = fib(0);
const one = fib(1);
const two = fib(2);
const five = fib(5);
const ten = fib(10);
