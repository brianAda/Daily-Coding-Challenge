/* eslint-disable */

/*
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 *
 * Notes:
 *  The number of elements initialized in nums1 and nums2 are m and n respectively.
 *  You may assume that nums1 has enough space(size that is equal to m + n) to hold additional elements from nums2.
 *
 * From LeetCode featured set on Arrays: https: //leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3253/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;
  let temp = nums1.slice(0, m);
  let i = 0;
  let j = 0;

  nums1.forEach((curr, index) => {
    if (temp[i] <= nums2[j] || nums2[j] === undefined) {
      nums1[index] = temp[i];
      ++i;
    } else {
      nums1[index] = nums2[j];
      ++j;
    }
  });
  return nums1;
};

// Cleaner solution - counting backwards, Space O(1)
var merge2 = function (nums1, m, nums2, n) {
  var len = m + n;
  m--;
  n--;
  while (len--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m--];
    } else {
      nums1[len] = nums2[n--];
    }
  }
};

nums1 = [1, 2, 3, 0, 0, 0];
nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3); // [1,2,2,3,5,6]

nums3 = [2, 0]
nums4 = [1]
merge(nums3, 1, nums4, 1); // [1,2,2,3,5,6]
