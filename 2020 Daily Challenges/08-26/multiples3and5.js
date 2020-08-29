/* eslint-disable */

/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 *  Find the sum of all the multiples of 3 or 5 below 1000.Reverse a singly linked list.
 *
 * From Project Euler
 * https://projecteuler.net/problem=1
 *
 */

// Get sum of all multiples of 3 and 5
var sumOfMultiples = function(range) {
  let sum = 0;

  // no need to check 0 or 1
  for (i = 2; i < range; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Alternate solution using reduce
var sumOfMultiples2 = function(range) {

  return [...Array(999).keys()].reduce((sum, curr) => {
    if(curr % 3 === 0 || curr % 5 === 0) {
      sum += curr;
    }
    return sum;
  });
}

sumOfMultiples2(1000);
