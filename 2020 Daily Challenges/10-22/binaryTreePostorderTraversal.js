/* eslint-disable */

/*
 *
 * From LeetCode's featured Binary Tree set
 * https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/
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
 * @param {TreeNode} root
 * @return {number[]}
 */

/**
 * Recursive Solution
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal (root) {
  let traversed = [];

  function pot(node) {
    if (node.left) {
      pot(node.left);
    }
    if (node.right) {
      pot(node.right);
    }
    if (node) {
      traversed.push(node.val);
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
