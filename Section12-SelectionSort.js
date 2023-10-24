function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) swap(arr, i, minIndex);
    }

    return arr;
}

console.log(selectionSort([4, 6, 2, 10, 32, -1]));
console.log(selectionSort([24, 6, 12, 13, 132, 11]));
console.log(selectionSort([-4, -6, 10, 1, 12, 1]));