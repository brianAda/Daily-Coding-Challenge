
/*
 * Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.
 *
 * Notice that the row index starts from 0.
 *
 * Follow up:
 *
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 * Constraints:
 *
 * 0 <= rowIndex <= 40
 *
 * From LeetCode's featured set on Recursion
 * https://leetcode.com/explore/featured/card/recursion-i/251/scenario-i-recurrence-relation/3234/
 *
 */


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  const prev = getRow(rowIndex - 1);

  const arr = new Array(rowIndex + 1);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i === rowIndex) {
      arr[i] = 1;
    } else {
      arr[i] = prev[i - 1] + prev[i];
    }
  }

  return arr;
};

getRow(3);

