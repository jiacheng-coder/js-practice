function Dog(name) {
  this.name = name
}
Dog.prototype.sayHi = function () {
  console.log("My name is", this.name)
}
let dog = new Dog('Bart')
dog.sayHi()

// 三大特点
// 1.返回对象
// 2.把构造函数里的this绑定到对象上
// 3.new出来的对象，可以调用function原型链上的方法

function newOperation(func, ...args) {
  let obj = {}
  obj.__proto__ = func.prototype
  let result = func.apply(obj, args)
  return result instanceof Object ? result : obj
}

dog = newOperation(Dog, 'Lucy')
dog.sayHi()
