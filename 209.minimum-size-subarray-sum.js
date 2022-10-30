/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  if (nums.length === 0) return 0;
  let sum = nums[0];
  let right = 0;
  let curr = 0;
  for (let left = 0; left < nums.length; left++) {
    while (right < nums.length) {
      if (sum < target) {
        right++;
        sum += nums[right];
      } else {
        curr = !curr ? right - left + 1 : Math.min(curr, right - left + 1);
        break;
      }
    }
    sum -= nums[left];
  }
  return curr;
};
// @lc code=end
