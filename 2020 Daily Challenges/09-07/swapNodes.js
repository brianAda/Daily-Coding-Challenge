/*
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 * Example 1:
 *   Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * From LeetCode's featured Recursion set
 * https://leetcode.com/explore/featured/card/recursion-i/250/principle-of-recursion/1681/
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
let swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  const tmp = head.next;
  head.next = tmp.next
  tmp.next = head;
  head.next = swapPairs(head.next);
  return tmp;
};
