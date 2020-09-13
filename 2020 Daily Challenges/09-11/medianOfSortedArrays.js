/* eslint-disable */

/*
 *  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 *  Follow up: The overall run time complexity should be O(log (m+n))
 *
 *  LeetCode #4 https://leetcode.com/problems/median-of-two-sorted-arrays/
 *  Byte By Byte Suggested Problem #1
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Iterative (sub-optimal) solution
const findMedianSortedArrays = function(nums1, nums2) {
  const length1 = nums1.length; //2
  const length2 = nums2.length; //1

//  let newArr = new Array().fill(length1 + length2);
  let newArr = [];
  let index1 = 0;
  let index2 = 0;
  // loop over nums
  while (index1 <= (length1 - 1) && index2 <= (length2 - 1)) {
    if (nums1[index1] < nums2[index2]) {
      newArr.push(nums1[index1]);
      ++index1;
    } else {
      newArr.push(nums2[index2]);
      ++index2;
    }
  }

  if (index1 === length1 && index2 < length2) {
    // slice remainder of nums2 and append to newArr
    let rem2 = nums2.slice(index2);
    newArr = [...newArr, ...rem2];
  } else if (index2 === length2 && index1 < length1) {
    let rem1 = nums1.slice(index1);
    newArr = [...newArr, ...rem1];
  }

  //  calculate middle index
  const middle = ((length1 + length2) / 2);

  if ((length1 + length2) % 2 === 0) {
    return (newArr[middle - 1] + newArr[Math.ceil(middle)]) / 2
  } else {
    return newArr[Math.floor(middle)];
  }
};


findMedianSortedArrays([1, 2], [3, 4]);
findMedianSortedArrays([1, 2], [3, 4]);
findMedianSortedArrays([], [1]);
findMedianSortedArrays([0, 0], [0, 0]);
findMedianSortedArrays([2], []);

