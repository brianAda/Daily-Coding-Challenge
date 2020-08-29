/* eslint-disable */

/*
 * Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
 *
 *
 * Example:
 *   Input: 1->2->4, 1->3->4
 *   Output: 1->1->2->3->4->4
 *
 * From LeetCode's featured Easy problems
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/771/
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    // initialize new, empty list
    let l3 = new ListNode();
    let head = l3;

    // iterate over both lists until we reach the null node of EITHER
    while (l1 !== null && l2 !== null) {
      // compare l1.val against l2.val
      if (l1.val <= l2.val) {
        l3.next = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        l3.next = new ListNode(l2.val);
        l2 = l2.next;
      }
      l3 = l3.next;
    }

    // assign the contents of whichever list still has remaining nodes
    if (l1 !== null) {
      l3.next = l1;
    } else if (l2 !== null) {
      l3.next = l2
    }
    return head.next;
};
