/*
 * Given a string s and a character c, return the number of occurences of c in s.
 *
 * Example:
 *   numChars ('oh heavens', 'h')
 *   returns: 2
 *
 * From @cassidoo's newsletter:
 * https://buttondown.email/cassidoo/archive/8fddad12-c45e-44f6-bda8-fd6adcf18dc4
 *
 */

// Using for..of. O(n)
function numChars3(str, char) {
  let counter = 0;
  for (const c of str) {
    if (c === char) ++counter;
  }
  return counter;
}

// Alternate solution - Using forEach
function numChars2(str, char) {
  let counter = 0;
  [...str].forEach((c) => {
    if (c === char) ++counter;
  });
  return counter;
}

// Using reduce
function numChars(str, char) {
  return [...str].reduce((acc, c) => {
    if (c === char) ++acc;
    return acc;
  }, 0);
}

// Test cases
const test1 = numChars('oh heavens', 'h'); // 2
const test2 = numChars(' ', 'a'); // 0
const test3 = numChars('123', '4'); // 0
const test4 = numChars('e', 'e'); // 1
