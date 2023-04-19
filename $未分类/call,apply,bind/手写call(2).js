function sayHi() {
  console.log(this.name);
}
const Alice = {
  name: 'Alice',
}

// sayHi.call(Alice, '点赞', '投币', '转发')

Function.prototype.newCall = function (obj) {
  obj.sayHi = this
  let arr = []
  // 从下标1开始，因为this是第一个参数
  for (let i = 1; i < arguments.length; i++) {
    arr.push(arguments[i])
  }
  console.log(arr);
  obj.sayHi()
  delete obj.sayHi
}
sayHi.newCall(Alice, '点赞', '投币', '转发')
