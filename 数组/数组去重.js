let arr = [1, 2, 3, 3, 4, 5]
const deduplicateArray1 = (arr) => {
  return [...new Set(arr)]
}
console.log(deduplicateArray1(arr));

const deduplicateArray2 = (arr) => {
  let res = []
  arr.forEach((item, index) => {
    if (!res.includes(item)) {
      res.push(item)
    }
  })
  return res
}
console.log(deduplicateArray2(arr));

const deduplicateArray3 = (arr) => {
  return arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
      pre.push(cur)
    }
    return pre
  }, [])
}
console.log(deduplicateArray3(arr));
