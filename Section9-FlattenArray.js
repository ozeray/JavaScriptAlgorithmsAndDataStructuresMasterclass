function flatten(arr) {
    let result = []

    function helper(arr) {
        for (const elem of arr) {
            if (Array.isArray(elem)) helper(elem)
            else result.push(elem)
        }
    }

    helper(arr);

    return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]