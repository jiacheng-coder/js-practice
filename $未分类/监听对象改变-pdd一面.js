function createDebugProxy(obj) {
  return new Proxy(obj, {
    set(target, key, value) {
      debugger; // 打上断点
      target[key] = value;
      return true;
    }
  });
}

// Example usage:
const obj = createDebugProxy({ a: 1, b: 2 });
obj.a = 3; // 在这里打上断点
obj.b = 4; // 这里也可以打上断点
