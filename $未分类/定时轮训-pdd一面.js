async function poll(url, options, condition, cb, delay = 1000, maxRetries = 3, timeout = 10000) {
  const start = Date.now();
  let retries = 0;
  while (true) {
    const response = await fetch(url, options);
    const result = await response.json();
    if (condition(result)) {
      return cb(result);
    }
    retries++;
    if (retries > maxRetries) {
      throw new Error(`Exceeded max retries of ${maxRetries}`);
    }
    if (Date.now() - start > timeout) {
      throw new Error(`Timeout of ${timeout}ms exceeded`);
    }
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}

const mockReturnMsg = () => {
  let flag = Math.random()
  if (flag < 0.5) {
    setTimeout(() => {
      return { status: 'success', data: 'hello' }
    }, 1000)
  } else {
    setTimeout(() => {
      return { status: 'fail', data: 'hello' }
    }, 1000)
  }
}

// Example usage:
poll(
  'https://example.com/api/data',
  { method: 'GET' },
  result => result.status === 'success',
  result => console.log(result.data),
  1000,
  5,
  30000
);
