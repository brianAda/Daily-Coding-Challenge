/* eslint-disable */

/*
 *
 * https://leetcode.com/problems/happy-number/
 *
 */

const isHappy = function(n) {
  // make an empty set
  let pastSums = new Set();

  while (true) {
    n = getSumOfDigitSquares(n);
    if (n === 1) return true;
    if (pastSums.has(n)) return false;
    pastSums.add(n);
  }
};

function getSumOfDigitSquares(num) {
  let str = `${num}`;
  let sum = 0;
  for (let char of str) {
    sum += Number(char) ** 2;
  }
  return sum;
}

const test = isHappy(19);
