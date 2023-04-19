// 1. 实现一个版本号比较功能
// 常见的npm包版本号一般有三位构成，如: 1.1.1
// 请实现比较两个版本号的大小

// v1 > v2 返回 1
// v1 = v2 返回 0
// v1 < v2 返回 -1
// 存在不合法的的版本号 返回 undefined

function compareVersion(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const len = Math.max(v1.length, v2.length);
  if (len > 3) return

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i] || 0);
    const num2 = parseInt(v2[i] || 0);

    if (num1 === num2) {
      continue;
    }

    if (num1 > num2) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
}
