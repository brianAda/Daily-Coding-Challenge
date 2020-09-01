/*
 * Shuffle a set of numbers without duplicates.
 *
 * Example:
 *
 * // Init an array with set 1, 2, and 3.
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 *
 * // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
 * solution.shuffle();
 *
 * // Resets the array back to its original configuration [1,2,3].
 * solution.reset();
 *
 * // Returns the random shuffling of array [1,2,3].
 * solution.shuffle();
 *
 * From LeetCode's featured Easy problems
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/98/design/670/
 *
 */


/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array using Fisher-Yates shuffle algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  // Make a copy of this.nums, shuffle it, and return it
  const shuffled = this.nums.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * i);
    [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]];
  }
  return shuffled;
};

// Your Solution object will be instantiated and called as such:
const nums = [1, 2, 3, 4];
const obj = new Solution(nums);
const param2 = obj.shuffle();
const param1 = obj.reset();
