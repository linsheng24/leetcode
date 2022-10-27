/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let pIndex = 0;

  function helper(preorder, inorder, iStart, iEnd) {
    if (iStart === iEnd || pIndex >= preorder.length) {
      return null;
    }
    let iIndex = iStart;
    while (inorder[iIndex] !== preorder[pIndex]) {
      iIndex += 1;
    }
    const node = new TreeNode(inorder[iIndex]);
    if (iIndex > iStart)
      node.left = helper(preorder, inorder, iStart, iIndex, pIndex++);
    if (iIndex < iEnd - 1)
      node.right = helper(preorder, inorder, iIndex + 1, iEnd, pIndex++);
    return node;
  }

  return helper(preorder, inorder, 0, preorder.length);
};
// @lc code=end
