let person = {
  name: '',
  age: 18,
  info: {
    salary: 10000
  }
}
// function defineProperty(obj, key, val) {
//   if (typeof val === 'object') {
//     Observer(val)
//   }
//   Object.defineProperty(obj, key, {
//     get() {
//       console.log(`访问了${key}属性`);
//       return val
//     },
//     set(newVal) {
//       console.log(`${key}属性被修改为${newVal}`);
//       val = newVal
//     }
//   })
// }
// function Observer(obj) {
//   if (typeof obj !== 'object' || obj == null) {
//     return
//   }
//   Object.keys(obj).forEach(key => {
//     defineProperty(obj, key, obj[key])
//   })
// }
// Observer(person)
// console.log(person.age);

const defineProperty = (obj, key, val) => {
  if (typeof val === 'object') {
    Observer(val)
  }
  const handler = {
    get() {
      console.log(`${key}:${val}`)
      return val
    },
    set(newVal) {
      val = newVal
    }
  }
  Object.defineProperty(obj, key, handler)
}
const Observer = (obj) => {
  // 非对象不递归
  if (typeof obj !== 'object' || obj === null) return
  // 对象
  Object.keys(obj).forEach(key => {
    defineProperty(obj, key, obj[key])
  })
}
Observer(person)
console.log(person.age);
console.log(person.info.salary);


