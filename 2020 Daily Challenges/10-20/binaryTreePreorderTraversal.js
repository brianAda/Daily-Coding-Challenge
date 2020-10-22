/* eslint-disable */

/*
 *
 * From LeetCode's featured Binary Tree set
 * https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Recursive Solution
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal (root) {
  let traversed = [];
  function pot(node) {
    traversed.push(node.val);
    if (node.left) {
      pot(node.left);
    }
    if (node.right) {
      pot(node.right);
    }
    return;
  }

  if (root) {
    pot(root);
  } else {
    return [];
  }
  return traversed;
}
