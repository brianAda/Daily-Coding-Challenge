/*
 * From @cassidoo 's weekly newsletter #162: *
 * https: //buttondown.email/cassidoo/archive/6aa8bf94-a74e-456d-881d-4ae8fc151a0a
 *
 * Given an array of integers representing asteroids in a row, for each asteroid, the absolute value represents its
 * size, and the sign represents its direction(positive = right, negative = left).
 *
 * Return the state of the asteroids after all collisions(assuming they are moving at the same speed).
 *
 * If two asteroids meet, the smaller one will explode. When they are the same size, they both explode. Asteroids moving
 * in the same direction will never meet.
 *
 * Example:
 *   asteroids([5, 8, -5])
 *   [5, 8] // The 8 and -5 collide, 8 wins. The 5 and 8 never collide.
 *
 * Example:
 *   asteroids([10, -10])
 *   [] // The 10 and -10 collide and they both explode.
 */

/* eslint-disable */

const asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0 && asteroids[i + 1] < 0) {
      if (Math.abs(asteroids[i]) === Math.abs(asteroids[i + 1])) {
        ++i;
      } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
        stack.push(asteroids[i + 1]);
        ++i;
      } else {
        stack.push(asteroids[i]);
        ++i;
      }
    } else {
      stack.push(asteroids[i]);
    }
  }
  return stack;
}


// Test cases
const test1 = asteroidCollision([5, 8, -5]); // [5, 8]
const test2 = asteroidCollision([10, -10]); // []
const test3 = asteroidCollision([1, 2]); // [1, 2]
const test4 = asteroidCollision([10, 2, -5]); // [10]
const test5 = asteroidCollision([-10, -2, 2, 10]); // [-10, -2, 2, 10]
