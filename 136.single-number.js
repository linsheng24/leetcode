/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const hash = nums.reduce((acc, num) => {
    if (acc[num] === 1) {
      delete acc[num];
    } else {
      acc[num] = 1;
    }
    return acc;
  }, {});
  return Object.keys(hash)[0];
};
// @lc code=end

