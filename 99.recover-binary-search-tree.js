/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
 */

// @lc code=start
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function (root) {
  let prev = null;
  let swap1 = null;
  let swap2 = null;
  const helper = function (root) {
    if (!root) return;
    helper(root.left);
    if (prev && prev.val > root.val) {
      if (!swap1) {
        swap1 = prev;
        swap2 = root;
      } else {
        swap2 = root;
      }
    }
    prev = root;
    helper(root.right);
  };
  helper(root);
  let tmp = swap1.val;
  swap1.val = swap2.val;
  swap2.val = tmp;
};
// @lc code=end
