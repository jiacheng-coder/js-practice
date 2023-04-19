// 第一个参数是需要进行节流处理的函数，第二个参数是间隔时间，默认为1秒钟
function throttle(fn, interval = 1000) {
  let flag = true // flag变量用于标记是否可以执行fn
  return (...args) => {
    // 如果flag为false，说明已经有定时器在执行fn了，直接返回
    if (!flag) return
    flag = false
    setTimeout(() => {
      flag = true
      fn(...args)
    }, interval)
  }
}

const handleScroll = () => {
  console.log(window.scrollY);
}
window.addEventListener("scroll", throttle(handleScroll, 2000));

const throttle2 = (fn, timeout) => {
  let start = 0
  return (...args) => {
    let now = new Date()
    if (now - start > timeout) {
      fn(...args)
      start = now
    }
  }
}
