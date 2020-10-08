/* eslint-disable */

/*
 * LeetCode #852: https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */

// Linear search: O(n)
var peakIndexInMountainArray2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return i;
  }
};

// Linear search using reduce
const peakIndexInMountainArray3 = A =>
  A.reduce((acc, curr, i) => (A[acc] < curr ? i : acc), 0);

// Binary search: O(log n)
var peakIndexInMountainArray = function (arr) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low < high) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};


const test1 = peakIndexInMountainArray([0, 1, 0]); // 1
const test2 = peakIndexInMountainArray([0, 2, 1, 0]); // 1
const test3 = peakIndexInMountainArray([0, 10, 5, 2]); // 1
const test4 = peakIndexInMountainArray([3, 4, 5, 1]); // 2
const test5 = peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]); // 2
