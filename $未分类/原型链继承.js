function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function () {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype); // 继承父类原型
Child.prototype.constructor = Child; // 修复子类的构造函数


Child.prototype.sayAge = function () {
  console.log(this.age);
}

var child = new Child('小明', 18);
child.sayName(); // 小明
child.sayAge(); // 18
