/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const backtrack = (nums, track) => {
    if (nums.length === 0) {
      result.push(track);
      return;
    }

    for (const num of nums) {
      backtrack(
        nums.filter((item) => item !== num),
        [...track, num]
      );
    }
  };
  backtrack(nums, []);
  return result;
};
// @lc code=end
