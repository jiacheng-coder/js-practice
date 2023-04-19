// 第一个参数是需要进行防抖处理的函数，第二个参数是延迟时间，默认为1秒钟
function debounce(fn, delay) {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const btn = document.querySelector('#btn')
const handleClick = () => {
  console.log('按钮点击');
}
btn.addEventListener('click', debounce(handleClick, 1000))
