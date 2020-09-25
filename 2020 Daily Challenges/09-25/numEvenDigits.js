/* eslint-disable */

/*
 * Given an array nums of integers, return how many of them contain an even number of digits.
 *
 * Example:
 *   Input: nums = [12, 345, 2, 6, 7896]
 *   Output: 2
 *
 * From LeetCode featured set on Arrays: https: //leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3237/
 *
 */

// Naive solution using getNumDigits helper function
var findNumbers = function (nums) {
  let counter = 0;

  nums.forEach(curr => {
    if (getNumDigits(curr)) {
      counter++
    }
  });
  return counter;
};

function getNumDigits(n) {
  let digitCount = 0;
  while (n >= 1) {
    n = Math.floor(n / 10);
    ++digitCount;
  }

  if (digitCount % 2 === 0) {
    return true;
  }

  return false;
}

// Cute solution
function findNumbers2(nums) {
  return nums.filter(n => n.toString().length % 2 === 0).length
}

let foo = findNumbers2([12, 345, 2, 6, 7896]);
