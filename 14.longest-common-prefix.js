/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const firstStr = strs[0];
  let resultStr = '';
  let isMatch = true;
  for (let i=0; i<firstStr.length && isMatch; i++) {
    const compareStr = firstStr[i];
    for (const str of strs) {
      if (str[i] !== compareStr) {
        isMatch = false;
      }
    }
    if (isMatch) {
      resultStr += compareStr;
    }
  }
  return resultStr;
};
// @lc code=end

// const longestCommonPrefix = function(strs) {
//   strs.sort();
//   for (let i = 0; i < strs[0].length; i++) {
//     if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
//   }
//   return strs[0];
// };