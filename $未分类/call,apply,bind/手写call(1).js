function sayHi() {
  console.log(this.name);
}
const Alice = {
  name: 'Alice',
}

sayHi.call(Alice)

Function.prototype.newCall = function (obj) {
  // console.log(this);
  obj.sayHi = this
  obj.sayHi()
  delete obj.sayHi
}
sayHi.newCall(Alice)
