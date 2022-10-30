/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let dp = [1];
  for (let end = 1; end < nums.length; end++) {
    let maxVal = 0;
    for (let start = 0; start < end; start++) {
      if (nums[end] > nums[start]) {
        maxVal = Math.max(dp[start], maxVal);
      }
    }
    dp[end] = maxVal + 1;
  }
  return Math.max(...dp);
};
// @lc code=end
