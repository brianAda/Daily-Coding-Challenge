/* eslint-disable */

/*
 * Reverse a singly linked list.
 *
 * Follow Up:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 * Example:
 *   Input: 1->2->3->4->5->NULL
 *   Output: 5->4->3->2->1->NULL
 *
 * From LeetCode's featured Easy problems
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/560/
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
 * @return {ListNode}
 */

// Iterative solution
var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};


// Recursive solution
var reverseList2 = function(head, prev = null) {
    if (head === null) {
        return null;
    }
    const next = reverseList2(head.next, head);
    head.next = prev;
    return next || head;
};
