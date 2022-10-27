/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  const isValid = (index, track) => {
    const len = track.length;
    for (let i = 0; i < track.length; i++) {
      if (
        track[len - i - 1][index - i - 1] === "Q" ||
        track[len - i - 1][index] === "Q" ||
        track[len - i - 1][index + i + 1] === "Q"
      ) {
        return false;
      }
    }
    return true;
  };

  const backtrack = (n, track) => {
    if (track.length === n) {
      result.push(track);
      return;
    }
    for (let i = 0; i < n; i++) {
      let strRow = "."
        .repeat(n)
        .split("")
        .map((char, index) => {
          if (index === i) {
            return "Q";
          }
          return char;
        })
        .join("");
      if (!isValid(i, track)) continue;
      backtrack(n, [...track, strRow]);
    }
  };
  backtrack(n, []);
  return result;
};
// @lc code=end
