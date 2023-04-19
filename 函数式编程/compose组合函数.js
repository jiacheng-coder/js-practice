// 1.组合函数
// 2.从右向左求值
const test = () => {
  const add = (x, y) => x + y
  const add5 = x => x + 5
  const multiply10 = x => x * 10
  // const f = compose(add5, multiply10, add)
  const f = compose2(add5, multiply10, add)
  console.log(f(3, 3)); // 6->60->65, 输出结果：65
}

// const compose = (...fns) => {
//   return (...args) => {
//     return fns.reverse().reduce((pre, cur) => {
//       return Array.isArray(pre) ? cur(...pre) : cur(pre)
//     }, args)
//   }
// }

const compose = (...fns) => {
  return (...args) => {
    let preResult = args
    for (let i = fns.length - 1; i >= 0; i--) {
      preResult = Array.isArray(preResult) ? fns[i](...preResult) : fns[i](preResult)
    }
    return preResult
  }
}

const compose2 = (...fns) => {
  return (...args) => {
    let preArgs = args
    for (let i = fns.length - 1; i >= 0; i--) {
      preArgs = Array.isArray(preArgs) ? fns[i](...preArgs) : fns[i](preArgs)
    }
    return preArgs
  }
}

test()
