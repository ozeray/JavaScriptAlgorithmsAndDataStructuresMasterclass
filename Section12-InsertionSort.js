function insertionSort_mine(arr) {
    const moveElement = (arr, from, to) => {
        const temp = arr[from];
        arr.splice(from, 1);
        arr.splice(to, 0, temp);
    }

    for (let i = 1; i < arr.length; i++) {
        let pos = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] < arr[j]) pos = j;
            else break;
        }
        if (pos !== i) moveElement(arr, i, pos);
    }

    return arr;
}

function insertionSort_tutorial(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j;
        let currentVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] >= currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }

    return arr;
}

console.log(insertionSort_mine([5, 4, 2, 3, -1, 0]));
console.log(insertionSort_mine([15, 40, -2, 13, 120, 0]));
console.log(insertionSort_mine([2, 1, 9, 76, 4]));