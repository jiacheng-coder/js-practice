function flatten(arr) {
  const result = []
  const stack = [...arr]
  while (stack.length) {
    const item = stack.pop()
    if (Array.isArray(item))
      stack.push(...item)
    else
      result.unshift(item) // 前插
  }
  return result
}

// 示例
const arr2 = [1, 2, [3, 4], 5, [6, 7, [8, 9]]]
console.log(flatten(arr2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
