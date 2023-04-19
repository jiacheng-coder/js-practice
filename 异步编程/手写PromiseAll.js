// 1.准备
function resolveTimeout(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}
function rejectTimeout(reason, delay) {
  return new Promise((r, reject) => setTimeout(() => reject(reason), delay));
}
const fruits = ["potatoes", "tomatoes"];
const vegetables = ["oranges", "apples"];
// 2.测试函数
function testPromiseAll(type, params) {
  let statusesPromise = type === 'origin' ? Promise.all(params) : PromiseAll(params);
  let list = async () => {
    try {
      const statuses = await statusesPromise;
      console.log(statuses);
    } catch (error) {
      console.log(error);
    }
  };
  list();
}
// testPromiseAll('origin', [1, 2, 3])
// testPromiseAll('origin', [resolveTimeout(fruits, 2000), rejectTimeout(vegetables, 2000)])
// testPromiseAll('origin', [resolveTimeout(fruits, 2000), resolveTimeout(vegetables, 2000)])
// 3.重写
const PromiseAll = (iterable) => {
  if ((typeof iterable?.[Symbol.iterator]) !== "function") {
    throw new TypeError("parameter must be iterable");
  }
  return new Promise((resolve, reject) => {
    const arr = [...iterable] // 可迭代对象转换为数组
    const len = arr.length
    if (len === 0) {
      resolve([])
    } else {
      let count = 0
      const result = new Array(len)
      arr.forEach((item, index) => {
        Promise.resolve(item).then(v => {
          result[index] = v
          count++
          if (count === len) {
            resolve(result)
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  })
}
testPromiseAll('test', [1, 2, 3])
testPromiseAll('test', [resolveTimeout(fruits, 2000), rejectTimeout(vegetables, 2000)])
testPromiseAll('test', [resolveTimeout(fruits, 2000), resolveTimeout(vegetables, 2000)])



