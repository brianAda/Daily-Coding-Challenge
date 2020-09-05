/*
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 * Example 1:
 *   Input: ["h","e","l","l","o"]
 *   Output: ["o","l","l","e","h"]
 *
 * Example 2:
 *  Input: ["H","a","n","n","a","h"]
 *  Output: ["h","a","n","n","a","H"]
 *
 * From LeetCode's featured Recursion set
 * https://leetcode.com/explore/featured/card/recursion-i/250/principle-of-recursion/1440/
 *
 */

/**
 * O(n) recursive solution
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  if (s.length === 0) {
    return [];
  }
  if (s.length === 1) {
    return s;
  }
  const char = s.shift();
  reverseString(s);
  s.push(char);
  return s;
};

reverseString(['h', 'e', 'l', 'l', 'o']);
