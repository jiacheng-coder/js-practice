function curry(fn) {
  const g = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2) => {
        return g(...args, ...args2);
      }
    }
  }
  return g
}

function __add(a, b) {
  return a + b;
}

const add = curry(__add)
console.log(add(3)(3));
