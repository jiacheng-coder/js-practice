
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param strs string字符串一维数组 
 * @return string字符串
 */
export function longestCommonPrefix(strs: string[]): string {
  // write code here
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  strs.sort()
  let first = strs[0]
  let last = strs[strs.length - 1]
  let res = ''
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      res += first[i]
    } else {
      break
    }
  }
  return res
}
