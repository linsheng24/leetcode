/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 * @return {number}
 */
const maxPathSum = function (root) {
  const helper = function (root, initMaxValue) {
    if (root === null)
      return {
        onSideMax: 0,
        maxValue: initMaxValue - 1,
      };
    const { onSideMax: leftSum, maxValue: leftMaxValue } = helper(
      root.left,
      initMaxValue
    );
    const { onSideMax: rightSum, maxValue: rightMaxValue } = helper(
      root.right,
      initMaxValue
    );
    const maxValue = Math.max(initMaxValue, leftMaxValue, rightMaxValue);

    return {
      onSideMax: Math.max(0, root.val, root.val + leftSum, root.val + rightSum),
      maxValue: Math.max(maxValue, root.val + leftSum + rightSum),
    };
  };

  const { maxValue } = helper(root, root.val);
  return maxValue;
};
// @lc code=end
