function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  // 如果数组长度为 0 或者切割大小小于 1，返回空数组
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  // 遍历数组，截取区块数组添加到结果中
  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}
