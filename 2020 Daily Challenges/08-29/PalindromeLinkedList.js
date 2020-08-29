/* eslint-disable */

/*
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Example 1:
 *   Input: 1->2
 *   Output: false
 *
 * Example 2:
 *   Input: 1->2->2->1
 *   Output: true
 *
 *  Follow up:
 *    Could you do it in O(n) time and O(1) space?
 *
 * From LeetCode's featured Easy problems
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/772/
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Naive solution: O(n) space, O(n) time
var isPalindrome = function(head) {
  // initialize empty array
  let arrList = [];

  // iterate over list, populate array
  while (head !== null) {
    arrList.push(head.val);
    head = head.next;
  }

  // iterate over array up to middle. Could also use a while loop where start < end
  let middle = Math.floor(arrList.length / 2);
  let end = arrList.length - 1;
  for (let start = 0; start < middle; start++) {
    if (arrList[start] !== arrList[end]) return false;
    end--;
  }

  return true;
};
