// 1.准备
function resolveTimeout(value, delay) {
  return new Promise(resolve => setTimeout(() => resolve(value), delay));
}
function rejectTimeout(reason, delay) {
  return new Promise((resolve, reject) => setTimeout(() => reject(reason), delay));
}
const vegetables = ["potatoes", "tomatoes"];
const fruits = ["oranges", "apples"];
//
PromiseAllSettled = iterable => {
  Promise.all(
    iterable.map(promise => {
      Promise.resolve(promise).then(res => { status: 'fullfilled', res }, err => { status: 'rejected', err })
    })
  )
}
// 2.测试函数
function test(type, params) {
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
test('test', [1, 2, 3])
// test('origin', [resolveTimeout(fruits, 1000), rejectTimeout(vegetables, 2000)])
// test('origin', [resolveTimeout(fruits, 2000), rejectTimeout(vegetables, 1000)])
// 3.实现
// PromiseAllSettled = iterable => {
//   Promise.all(
//     iterable.map(promise => {
//       Promise.resolve(promise).then(res => { status: 'fullfilled', value }, err => { status: 'rejected', err })
//     })
//   )
// }



















// if (!Promise.allSettled) {
//   const rejectHandler = reason => ({ status: "rejected", reason })
//   const resolveHandler = value => ({ status: "fulfilled", value })
//   Promise.allSettled = promises =>
//     Promise.all(
//       promises.map((promise) =>
//         Promise.resolve(promise) // 每个 promise 需要用 Promise.resolve 包裹下,以防传递非 promise
//           .then(resolveHandler, rejectHandler)
//       )
//     );
// };
// // 手写
// const resolveHandler = value => ({ status: "fulfilled", value })
// const rejectHandler = reason => ({ status: "rejected", reason })
// const PromiseAllSettled = promises => {
//   Promise.all(promises.map(
//     promise => {
//       Promise.resolve(promise).then(resolveHandler, rejectHandler)
//     }
//   ))
// }
// // 使用
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, 'three');
// })
// const promises = [p1, p2, p3];
// // Promise.allSettled(promises).then(console.log)
// // console.log(PromiseAllSettled(promises));
// // Promise.all(promises.map(promise => {
// //   Promise.resolve(promise).then(resolveHandler, rejectHandler)
// // })).then(res => {
// //   console.log(res);
// // })

// if (!Promise.allSettled) {
//   Promise.allSettled = iterable => {
//     Promise.all(
//       iterable.map(promise => {
//         Promise.resolve(promise).then(res => { status: 'fullfilled', value }).catch(err => { status: 'rejected', value })
//       })
//     )
//   }
// }
