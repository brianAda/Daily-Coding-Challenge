/* eslint-disable */

const {
  rosybrown
} = require("color-name");

/*
 * Given an array nums and a value val, remove all instances of that value in -place and
 return the new length.
 *
 * Do not allocate extra space
 * for another array, you must do this by modifying the input array in -place with O(1) extra memory.
 *
 * The order of elements can be changed.It doesn 't matter what you leave beyond the new length.
 *
 * Example:
 *   Input: [1, 0, 2, 3, 0, 4, 5, 0]
 * Output: null(array is modified to)[1, 0, 0, 2, 3, 0, 0, 4]
 *
 * From LeetCode featured set on Arrays: https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
 */




/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    } else {
      counter++;
    }
  }
  return counter;
};

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let test = removeElement(arr, 2);
