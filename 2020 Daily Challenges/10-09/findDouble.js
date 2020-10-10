/* eslint-disable */

/*
 * Given an array arr of integers, check if there exists two integers N and M such that N is the double of M(i.e.N = 2 * M).
 *
 *  More formally check  if there exists two indices i and j such that:
 *    i != j
 *    0 <= i, j < arr.length
 *    arr[i] == 2 * arr[j]
 *
 * From LeetCode featured set on Arrays: https: //leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] * 2) in hashTable || (arr[i] / 2) in hashTable) {
      return true;
    }
    hashTable[arr[i]] = i;
  }
  return false;

};

let test1 = checkIfExist([10, 2, 5, 3]);
let test2 = checkIfExist([7, 1, 14, 11]);
let test3 = checkIfExist([3, 1, 7, 11]);
