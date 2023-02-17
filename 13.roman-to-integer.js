/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const romanMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let sub = 0;
  const sum = s.split('')
    .map((char, index) => {
      if (index < s.length - 1) {
        if (char === 'I') {
          if (s[index + 1] === 'V' || s[index + 1] === 'X') {
            sub = sub + 2;
          }
        }
        if (char === 'X') {
          if (s[index + 1] === 'L' || s[index + 1] === 'C') {
            sub = sub + 20;
          } 
        }
        if (char === 'C') {
          if (s[index + 1] === 'D' || s[index + 1] === 'M') {
            sub = sub + 200;
          }  
        }
      }
      return romanMap[char];
    })
    .reduce((acc, num) => acc + num);
  return sum - sub;
};
// @lc code=end

