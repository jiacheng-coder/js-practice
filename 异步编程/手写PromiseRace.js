// 1.准备
function resolveTimeout(value, delay) {
  return new Promise(resolve => setTimeout(() => resolve(value), delay));
}
function rejectTimeout(reason, delay) {
  return new Promise((resolve, reject) => setTimeout(() => reject(reason), delay));
}
const vegetables = ["potatoes", "tomatoes"];
const fruits = ["oranges", "apples"];
// 2.测试函数
function test(type, params) {
  let statusesPromise = type === 'origin' ? Promise.race(params) : PromiseRace(params);
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
test('origin', [1, 2, 3])
test('origin', [resolveTimeout(fruits, 1000), rejectTimeout(vegetables, 2000)])
test('origin', [resolveTimeout(fruits, 2000), rejectTimeout(vegetables, 1000)])
// 3.重写
// const PromiseRace = (iterable) => {
//   if ((typeof iterable?.[Symbol.iterator]) !== "function") {
//     throw new TypeError("parameter must be iterable");
//   }
//   return new Promise((resolve, reject) => {
//     const arr = [...iterable] // 可迭代对象转换为数组
//     const len = arr.length
//     if (len === 0) {
//       resolve([])
//     } else {
//       arr.forEach((item, index) => {
//         Promise.resolve(item).then(res => {
//           resolve(res)
//         }).catch(err => {
//           reject(err)
//         })
//       })
//     }
//   })
// }
const PromiseRace = (iterable) => {
  if (typeof iterable?.[Symbol.iterator] !== "function") {
    throw new TypeError("parameter must be iterable");
  }
  return new Promise((resolve, reject) => {
    const arr = [...iterable]
    if (arr.length === 0) {
      resolve([])
    } else {
      arr.forEach((item, index) => {
        Promise.resolve(item).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  })
}



