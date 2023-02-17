/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    }
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    }
  }
  return left;
};
// @lc code=end

