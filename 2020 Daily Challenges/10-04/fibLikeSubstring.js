/*
 * Given an array of increasing integers, find the length of the longest fibonacci-like subsequence of the array. If one does not exist, return 0.
 * A sequence is "fibonacci-like" if X[i] + X[i + 1] = X[i + 2]
 *
 * Example:
 *   fibonacciLike([1, 3, 7, 11, 12, 14, 18]);
 *   3 // these sequences: [1, 11, 12], [3, 11, 14], or [7, 11, 18]
 *
 * From @cassidoo's weekly newsletter:
 * https://buttondown.email/cassidoo/archive/9ce8af3f-6d9b-490a-bde8-33e4ff77cbc1
 *
 */

/* eslint-disable */

function fibonacciLike(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let acc = new Set([]);
    for (let j = i + 1; j < arr.length; j++) {
      let slow = arr[i];
      let fast = arr[j];
      let idx = arr.indexOf(slow + fast);
      if (idx > -1 && idx > i) {
        acc.add(slow);
        acc.add(fast);
        acc.add(arr[idx]);
        i = idx;
        j = idx
      }
    }
    if (max, acc.size) {
      max = acc.size;
    }
  }
  return max;
}


let test = fibonacciLike([1, 3, 7, 11, 12, 14, 18]);
