const myFlat = (arr, num = 1) => {
  if (num <= 0) {
    return arr.slice()
  } else {
    return arr.reduce((pre, item) => {
      return pre.concat(Array.isArray(item) ? myFlat(item, num - 1) : item)
    }, []);
  }
}

// test
let arr = [1, 2, [3, [4]], 5]
console.log(myFlat(arr, 1));
console.log(myFlat(arr, 2));


