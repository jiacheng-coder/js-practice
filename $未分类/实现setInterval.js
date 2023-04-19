function mySetInterval(func, delay) {
  //声明timer，用于后面清除定时器
  let timer = null
  const interval = () => {
    //执行对应传入函数
    func()
    //用timer接收setTimeout返回的定时器编号
    //setTimeout接收interval和delay，等待delay结束后，再次执行setTimeout
    timer = setTimeout(interval, delay)
  }
  //第一次调用setTimeout，调用interval，时延为delay
  setTimeout(interval, delay)
  //返回方法取消调用
  return function () {
    //清除timer编号的定时器
    clearTimeout(timer)
  }
}

// 测试
const timer = mySetInterval(() => console.log(888), 1000)
setTimeout(() => {
  timer()
}, 4000)

