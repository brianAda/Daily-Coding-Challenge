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
function inorderTraversal (root) {
  let traversed = [];

  function iot(node) {
    if (node.left) {
      iot(node.left);
    }
    if (node) {
      traversed.push(node.val);
    }
    if (node.right) {
      iot(node.right);
    }
    return;
  }

  if (root) {
    iot(root);
  } else {
    return [];
  }
  return traversed;
}
