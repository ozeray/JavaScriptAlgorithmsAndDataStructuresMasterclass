function search(sortedArray, number) {
    if (sortedArray.length === 0) {
        return -1;
    }
    //return binary_search_recursion(sortedArray, 0, sortedArray.length - 1, number);
    return binary_search_iterative(sortedArray, number);

}

// O(logn) -> More efficient than recursion
function binary_search_iterative(arr, number) {
    let left = 0;
    let right = arr.length;

    while (left <= right) {
        const middle = Math.floor((right + left) / 2);
        const pivot = arr[middle];
        if (pivot === number) {
            return middle;
        } else if (pivot < number) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

// O(logn)
function binary_search_recursion(arr, first, last, number) {
    const middle = Math.floor((right + left) / 2);
    const pivot = arr[middle];

    if (pivot === number) {
        return middle;
    } else {
        if (first >= last) {
            return -1;
        } else if (pivot < number) {
            return binary_search_recursion(arr, middle + 1, last, number);
        } else {
            return binary_search_recursion(arr, 0, middle - 1, number);
        }
    }
}

console.log(search([1, 2, 3], 1));
console.log(search([1, 2, 3], 2));
console.log(search([1, 2, 3], 3));
console.log(search([-1, 0, 1, 2, 3, 12, 45, 106, 566, 899], 12));
console.log(search([-1, 0, 1, 2, 3, 12, 45, 106, 566, 899], 566));
console.log(search([-1, 0, 1, 2, 3, 12, 45, 106, 566, 899], 899));
console.log(search([-1, 0, 1, 2, 3, 12, 45, 106, 566, 899], 5));
console.log(search([-1, 0, 1, 2, 3, 12, 45, 106, 566, 899, 1045, 2455, 7899, 10000, 14000, 156000, 234000, 1000000], 5));
console.log(search([-1, 0, 1, 2, 3, 12, 45, 106, 566, 899, 1045, 2455, 7899, 10000, 14000, 156000, 234000, 1000000, 10000000], 156000));
console.log(search([-1, 0, 1, 2, 3, 12, 45, 106, 566, 899, 1045, 2455, 7899, 10000, 14000, 156000, 234000, 1000000, 10000000], 5));
console.log(search([1, 2, 3], -1));