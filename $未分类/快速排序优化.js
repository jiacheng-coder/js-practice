function randomizeArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

function sortArray(arr) {
  const randomizedArr = randomizeArray(arr);
  if (randomizedArr.length < 10) {
    return insertionSort(randomizedArr);
  } else {
    return quickSort(randomizedArr);
  }
}

const arr = [1, 3, 5, 2, 23, 4, 16, 88]
console.log(sortArray(arr));
