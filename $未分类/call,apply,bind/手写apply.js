function sayHi() {
  console.log(this.name);
  console.log(arguments);
}
const Alice = {
  name: 'Alice',
}

sayHi.apply(Alice, ['点赞', '投币', '转发'])


Function.prototype.newApply = function (obj, arr) {
  obj.sayHi = this
  console.log(arr);
  delete obj.sayHi
}
// sayHi.newApply(Alice, ['点赞', '投币', '转发'])
