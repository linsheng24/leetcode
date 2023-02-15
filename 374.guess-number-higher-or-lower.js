/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (guess(mid) === -1) {
      right = mid - 1;
    }
    if (guess(mid) === 1) {
      left = mid + 1;
    }
    if (guess(mid) === 0) {
      return mid;
    }
  }
  return -1;
};
// @lc code=end

