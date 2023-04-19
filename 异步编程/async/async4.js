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
  const data3 = yield getData(data2)
  return `success: ${data3}`
}

function generatorToAsync(generatorFun) {
  return (...args) => {
    const gen = generatorFun(...args)
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let res
        try {
          res = gen[key](arg)
        } catch (err) {
          return reject(err)
        }
        const { value, done } = res
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step('next')
    })
  }
}

const asyncFn = generatorToAsync(test)
asyncFn().then(res => console.log(res))
