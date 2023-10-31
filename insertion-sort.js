// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {

  let unsorted = [...arr];
  let sorted = [];

  while (unsorted.length > 0){
    console.log(sorted.join(','));

    let value = unsorted.pop();
    sorted.push(null);

    let i = sorted.length - 1;
    for (i; i >= 0; i--){
      if (i - 1 === -1) break;

      let nextEle = sorted[i-1];

      if (nextEle < value) break;
      else {
        sorted[i] = sorted[i - 1];
      }
    }
    sorted[i] = value;

  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {

  let divider = 1;
  while (divider < arr.length){
    console.log(arr.join(','));

    let value = arr[divider];
    let i;

    for (i = divider; i >= 0; i--) {
      if (i - 1 === -1) break;
      let check = arr[i-1];
      if (check < value) break;
      else arr[i] = check;
    }

    arr[i] = value;
    divider++;
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
