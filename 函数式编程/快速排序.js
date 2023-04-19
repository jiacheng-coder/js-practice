function quickSort(arr) {
  if (arr.length <= 1) return arr

  let baseIndex = Math.floor(arr.length / 2);
  let baseVal = arr.splice(baseIndex, 1)[0]
  let left = [], right = []
  for (let item of arr) {
    if (item < baseVal) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  return quickSort(left).concat(baseVal, quickSort(right))
}
let arr = [2, 3, 15, 6, 1, 7, 8]
console.log(quickSort(arr));
