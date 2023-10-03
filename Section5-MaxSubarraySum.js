function maxSubarraySum(arr, n) {
    if (n > arr.length || arr.length < 2) {
        return null;
    }
    let max = subarraySum(arr, n);
    let subSum = max;

    for (let p = n; p < arr.length; p++) {
        subSum = subSum + arr[p] - arr[p - n];
        max = Math.max(max, subSum);
    }
    return max;
}

function subarraySum(arr, n) {
    let sum = 0;
    for (let index = 0; index < n; index++) {
        sum += arr[index];
    }
    return sum;
}

console.log(maxSubarraySum([1, 2, 3, 1, 1], 2));
console.log(maxSubarraySum([1, 2, 3, 1, 1], 3));
console.log(maxSubarraySum([1, 1, 3, 10, 1], 4));
console.log(maxSubarraySum([42, 6, 9, 2, -100, 8, 5, 6, 30, -400], 3));
console.log(maxSubarraySum([42, 6, 9, 2, 100, 8, 5, 6, 30, -400], 3));
console.log(maxSubarraySum([42, 6, 9, 2, -100, 8, 5, 6, 30, 400], 3));