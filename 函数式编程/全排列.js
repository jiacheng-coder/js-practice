// remove: 操作不改变原set，也就是无副作用
function remove(set, item) {
  let newSet = new Set([...set]);
  newSet.delete(item)
  return newSet
}
let set = new Set([1, 2, 3])
let newSet = remove(set, 2)
console.log(set);
console.log(newSet);

// flatten函数使用了函数式编程的思想，不同于其他的flatten方法
function flatten(arr) {
  if (!Array.isArray(arr)) return arr
  return [].concat(...arr.map(flatten))
}
let arr = [1, 2, [3, 4, [5, 6]]]
console.log(flatten(arr));

// 全排列：使用了函数式编程的思想，以及remove和flatten方法
function permutation(str) {
  function R(set) {
    if (set.size === 1) return [set.values().next().value]
    return flatten([...set].map(char =>
      R(remove(set, char)).map(perm => char + perm)
    ))
  }
  return R(new Set([...str]))
}
console.log(permutation('abc'));
