function mergeArraysSorted(arr1, arr2) {
    let arr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j])
            arr.push(arr1[i++]);
        else
            arr.push(arr2[j++]);
    }
    if (i < arr1.length) arr.push(...arr1.slice(i))
    if (j < arr2.length) arr.push(...arr2.slice(j))
    return arr;
}

function splitRecursive(arr) {
    let result = []

    function split(arr) {
        if (arr.length > 1) {
            split(arr.slice(0, arr.length / 2));
            split(arr.slice(arr.length / 2));
        } else {
            result.push(arr);
        }
    }

    split(arr);
    return result;
}

function mergeSort(arr) {
    let start = performance.now();

    let split = splitRecursive(arr);

    function merge(split) {
        if (split.length === 2) {
            return mergeArraysSorted(split[0], split[1])
        } else {
            let sorted = [];
            for (let i = 0; i < split.length; i = i + 2) {
                sorted.push(mergeArraysSorted(split[i], i + 1 === split.length ? [] : split[i + 1]));
            }
            return merge(sorted);
        }
    }

    let result = merge(split);
    console.log(result);
    console.log(performance.now() - start);
}

// mergeSort([1, -1]);
// mergeSort([3, 1, 2]);
mergeSort([-1, 4, 2, 1, -2, 7, 15, 267, -56, 0, 8, 12]);

function mergeSort_Tutorial(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort_Tutorial(arr.slice(0, mid));
    let right = mergeSort_Tutorial(arr.slice(mid));
    return mergeArraysSorted(left, right);
}

function mergeSort_Wrapper(arr) {
    let start = performance.now();
    console.log(mergeSort_Tutorial([-1, 4, 2, 1, -2, 7, 15, 267, -56, 0, 8, 12]));
    console.log(performance.now() - start);
}

mergeSort_Wrapper([-1, 4, 2, 1, -2, 7]);

// console.log(mergeSort_Tutorial([1, -1]));
// console.log(mergeSort_Tutorial([3, 1, 2]));
