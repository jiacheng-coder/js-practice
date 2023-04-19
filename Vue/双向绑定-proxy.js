// let person = {
//   name: 'Lucy',
//   age: 18
// }
// let handlerObj = {
//   get(obj, key) {
//     console.log(`访问了${key}属性`)
//     return key in obj ? obj[key] : '属性不存在'
//   },
//   set(obj, key, value) {
//     console.log(`${key}属性被改变为${value}`);
//     obj[key] = value;
//     return true
//   }
// }
// let proxyPerson = new Proxy(person, handlerObj);
// console.log("name =", proxyPerson.name);
// proxyPerson.name = 'John';
// console.log("name =", proxyPerson.name);
// console.log(proxyPerson.salary);

let person = {
  name: 'John',
  age: 18
}
const handler = {
  get(target, key) {
    console.log('Proxy get');
    return key in target ? target[key] : '未找到';
  },
  set(target, key, val) {
    console.log('Proxy set');
    target[key] = val;
    return true
  }
}
let _person = new Proxy(person, handler);
console.log(_person.name);
_person.age = 20
console.log(_person.name);
