/*
 * @lc app=leetcode id=1894 lang=javascript
 *
 * [1894] Find the Student that Will Replace the Chalk
 */

// @lc code=start
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const chalkSum = chalk.reduce((acc, item) => {
    return acc + item;
  }, 0);
  let kRemain = (k + chalkSum) % chalkSum;
  for (let index in chalk) {
    kRemain -= chalk[index];
    if (kRemain < 0) return index;
  }
};
// @lc code=end
