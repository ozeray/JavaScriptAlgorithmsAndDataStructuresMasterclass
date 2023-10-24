function bubble_sort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
    return arr;
}

function bubble_sort_optimized(arr) {
    for (let i = arr.length; i > 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false
            }
        }
        if (noSwap) break;
    }
    return arr;
}

console.log([3, 54, 1, 634, 2134, -1, 33].join());
console.log(bubble_sort_optimized([3, 54, 1, 634, 2134, -1, 33]).join());
