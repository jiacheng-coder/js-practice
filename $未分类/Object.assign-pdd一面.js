a = [1, 2, { a: 2 }]
b = Object.assign({}, a) // 会先进行隐式转换，将a转换为数组，然后再通过assign将对象的所有可枚举属性，从源对象复制到目标对象
d = Object.assign(a) // 浅拷贝，此时的a就是目标对象
let c = [...a] // 深拷贝，对a的操作不会影响c

a[0] = 2

console.log(a)
console.log(b)
console.log(c)
console.log(d)
