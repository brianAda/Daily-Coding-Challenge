/* eslint-disable */

/*
 *
 * From LeetCode's featured Arrays set
 * https://leetcode.com/problems/move-zeroes/solution/
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[slow] = nums[i];
            ++slow;
        }
    }
    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
