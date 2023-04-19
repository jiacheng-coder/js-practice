function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null)
    return obj

  const newObj = Array.isArray(obj) ? [] : {}
  for (const key in obj)
    newObj[key] = deepCopy(obj[key])

  return newObj
}
let obj = {
  name: 'foo',
  age: 18,
  fn() {
    console.log('123');
  }
}


const test = () => {
  let _obj = deepCopy(obj)
  _obj.name = 'foo123'
  _obj.fn = () => {
    console.log('456');
  }
  console.log(obj);
  console.log(_obj);
  obj.fn()
  _obj.fn()
}
test()

