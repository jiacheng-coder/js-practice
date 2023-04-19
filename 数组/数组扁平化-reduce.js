const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      pre = pre.concat(flatten(cur))
    } else {
      pre = pre.concat(cur)
    }
    return pre
  }, [])
}
// 示例
const arr1 = [1, 2, [3, 4], 5, [6, 7, [8, 9]]]
console.log(flatten(arr1)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

