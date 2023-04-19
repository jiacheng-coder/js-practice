function async(fn) {
  return function () {
    const gen = fn.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let result;
        try {
          result = gen[key](arg);
        } catch (error) {
          return reject(error);
        }
        const { value, done } = result;
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(val => step("next", val), err => step("throw", err));
        }
      }
      return step("next");
    });
  };
}

function* test() {
  const result1 = yield new Promise(resolve => setTimeout(() => resolve(1), 1000));
  console.log(result1);
  const result2 = yield new Promise(resolve => setTimeout(() => resolve(2), 1000));
  console.log(result2);
  const result3 = yield new Promise(resolve => setTimeout(() => resolve(3), 1000));
  console.log(result3);
}

const run = async(test);
run();
