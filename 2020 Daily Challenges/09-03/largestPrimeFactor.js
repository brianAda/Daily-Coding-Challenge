/* eslint-disable */

/*
 *  The prime factors of 13195 are 5, 7, 13 and 29.
 *
 *  What is the largest prime factor of the number 600851475143 ?
 *
 *
 * From Project Euler: https://projecteuler.net/problem=3
 *
 */

function largestPrimeFactor(num) {
  let largestPrime = 0;

  const isPrime = number => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i) && num % i === 0) {
      largestPrime = i;
    }
  }
  return largestPrime;
}

let test = largestPrimeFactor(13195);
