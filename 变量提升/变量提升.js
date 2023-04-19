// 在作用域内使用var声明变量
function getData(type) {
  if (type === 1) {
    var value = 'Lucy'
  } else {
    console.log(value);
  }
  console.log(value);
}

// 等价于下面的函数
function getData(type) {
  var value = undefined
  if (type === 1) {
    value = 'Lucy'
  } else {
    console.log(value);
  }
  console.log(value);
}

getData(2)

// var会无意中覆盖一个已经存在的全局变量
