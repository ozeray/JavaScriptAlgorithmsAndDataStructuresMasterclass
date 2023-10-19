function mergeArrays(arr1, arr2) {
    let arr = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i++]);
        } else {
            arr.push(arr2[j++]);
        }
    }
    if (i < arr1.length) arr.push(...arr1.slice(i))
    if (j < arr2.length) arr.push(...arr2.slice(j))
    return arr;
}


console.log(mergeArrays([-1,1], [0,6]));
console.log(mergeArrays([-1,1], [2,3]));
console.log(mergeArrays([1,5], [4]));
console.log(mergeArrays([], [1,1]));
console.log(mergeArrays([1,1], []));
console.log(mergeArrays([], [1,2]));
console.log(mergeArrays([-2], [1,2]));
console.log(mergeArrays([-2,1], [2]));