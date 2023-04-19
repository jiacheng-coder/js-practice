let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2');
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p3');
  }, 3000);
});

// 实现类似Promise.race()功能
function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    // 参数必须是可迭代类型且不为空, 使用Symbol.iterator迭代器属性来判断
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      throw new TypeError(`${iterable} is not iterable`);
    }
    // 遍历参数中的每个元素
    for (let item of iterable) {
      // 如果是 promise 对象 就 调 用 then 方法
      if (item instanceof Promise) {
        item.then(resolve, reject);
      } else {
        // 如果 不 是 promise 对象 就 直接将其包装成一个立即成功或失败 的 promise 对象
        resolve(item);
      }
    }
  });
}

promiseRace([p1, p2, p3]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
