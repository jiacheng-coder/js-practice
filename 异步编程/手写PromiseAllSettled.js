// 1.准备
function resolveTimeout(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}
function rejectTimeout(reason, delay) {
  return new Promise((r, reject) => setTimeout(() => reject(reason), delay));
}
const fruits = ["potatoes", "tomatoes"];
const vegetables = ["oranges", "apples"];
// 2.使用
function testPromiseAllSettled(type, params) {
  let statusesPromise = type === 'origin' ? Promise.allSettled(params) : PromiseAllSettled(params);
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
testPromiseAllSettled('origin', [1, 2, 3])
testPromiseAllSettled('origin', [resolveTimeout(fruits, 2000), rejectTimeout(vegetables, 2000)])
testPromiseAllSettled('origin', [resolveTimeout(fruits, 2000), resolveTimeout(vegetables, 2000)])
// 3.重写
const PromiseAllSettled = (iterable) => {
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
          // let obj = {}
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
// testPromiseAllSettled('test', [1, 2, 3])
// testPromiseAllSettled('test', [resolveTimeout(fruits, 2000), rejectTimeout(vegetables, 2000)])
// testPromiseAllSettled('test', [resolveTimeout(fruits, 2000), resolveTimeout(vegetables, 2000)])



