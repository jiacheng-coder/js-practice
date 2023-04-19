// 3. 最长公共子字符串
// 给定两个字符串，s1 和 s2，求两个字符串之间最长的公共子字符串长度

// 示例
// const s1 = 'abcdefgfeggs';
// const s2 = 'ssxdefgfeg';
// 结果为 7 (defgfeg)

function findLongestCommonSubStringLength(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  let maxLen = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  return maxLen;
}
const s1 = 'abcdefgfeggs';
const s2 = 'ssxdefgfeg';
console.log(findLongestCommonSubStringLength(s1, s2)); // 结果为 7 (defgfeg)
