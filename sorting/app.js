/*
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
console.log(bubbleSort([1, 2, 43, 3, 0]));
*/

/*
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11]));
*/

/*
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let element = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = element;
  }
  return arr;
}
console.log(insertionSort([12, 11, 13, 5, 6]));
*/


