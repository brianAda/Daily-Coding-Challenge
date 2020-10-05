/*
 * Given an array that was once sorted in ascending order is rotated at some pivot unknown to you before hand, find the minimum value in that array in O(n) or less.
 *
 * Example:
 *   Input: findMin([7, 9, 0, 2, 4]);
 *   Output: 0
 *
 * From @cassidoo's weekly newsletter:
 * https://buttondown.email/cassidoo/archive/e203192d-4aa9-48c3-a715-78fb26fe503f
 *
 */

function findMin(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) return arr[i + 1];
  }
  // Handle cases where array was fully rotated
  return arr[0];
}

let test = findMin([7, 9, 0, 2, 4]);
let test2 = findMin([99, 110, -1, 3, 6]);
let test3 = findMin([1, 2, 3]);
