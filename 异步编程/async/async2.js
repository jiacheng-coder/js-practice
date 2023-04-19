function getData(val) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val * 2)
    }, 1000)
  })
}

function* test2() {
  const data1 = yield getData(1)
  const data2 = yield getData(data1)
  return `success: ${data2}`
}

const g = test2()
const next1 = g.next()
next1.value.then(data1 => {
  console.log('data1: ' + data1);
  const next2 = g.next(data1)
  next2.value.then(data2 => {
    console.log('data2: ' + data2);
    console.log(g.next(data2));
  })
})

