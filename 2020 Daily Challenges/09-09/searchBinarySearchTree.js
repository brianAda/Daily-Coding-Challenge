
/*
 * Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
 *
 * Example:
 * Given the tree:
 *        4
 *       / \
 *      2   7
 *     / \
 *    1   3
 *
 * And the value to search: 2
 *
 * You should return this subtree:
 *
 *      2
 *     / \
 *    1   3
 *
 * In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.
 *
 *
 * From LeetCode's featured set on Recursion
 * https://leetcode.com/explore/featured/card/recursion-i/251/scenario-i-recurrence-relation/3233/
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
 * @param {number} val
 * @return {TreeNode}
 */

/* eslint-disable */
let searchBST = function (root, val) {
  if (root === null) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (root.val > val) {
    return searchBST(root.left, val);
  }

  if (root.val < val) {
    return searchBST(root.right, val);
  }
};
