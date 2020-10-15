/* eslint-disable */

/*
 *
 * From LeetCode's featured Arrays set
 * https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3258/
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      ++slow;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
};


const test1 = removeDuplicates([1, 2, 2]);
//Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.


const test2 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what you leave beyond the returned length.

// Edge case tests
const test3 = removeDuplicates([1]);
const test4 = removeDuplicates([]);
const test5 = removeDuplicates([1, 1, 1]);
const test6 = removeDuplicates([1, 2]);
