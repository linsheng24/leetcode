/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  const closest = [];
  for (const item of arr) {
    const distance = Math.abs(x - item);
    if (closest.length < k) {
      closest.push(item);
    } else if (Math.abs(x - closest[0]) > distance) {
      closest.push(item);
      closest.shift();
    }
  }
  return closest;
};
// @lc code=end
