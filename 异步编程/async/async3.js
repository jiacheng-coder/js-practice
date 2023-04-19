function getData(val) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val * 2)
    }, 1000)
  })
}
// 封装一个能暂停执行,恢复执行的函数 generatorToAsync
function* test() {
  const data1 = yield getData(1)
  const data2 = yield getData(data1)
  return `success: ${data2}`
}

function generatorToAsync(generatorFun) {
  return function () {
    return new Promise((resolve, reject) => {
      const g = generatorFun()
      const next1 = g.next()
      next1.value.then(data1 => {
        const next2 = g.next(data1)
        next2.value.then(data2 => {
          return resolve(g.next(data2).value);
        })
      })
    })
  }
}

const asyncFn = generatorToAsync(test)
asyncFn().then(res => console.log(res))
