function getData(val) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val * 2)
    }, 1000)
  })
}

async function test() {
  const data1 = await getData(1)
  console.log(data1);
  const data2 = await getData(data1)
  return `success: ${data2}`
}
test().then(res => console.log(res))
