function minSubArrayLen(arr, sum) {
    let min = Infinity;
    let left = 0;
    let right = 0;
    let subarraySum = 0;

    while (left < arr.length) {
        if (subarraySum < sum && right < arr.length) {
            subarraySum += arr[right++];
        } else if (subarraySum >= sum) {
            min = Math.min(min, right - left);
            subarraySum -= arr[left++];
        } else {
            break;
        }
    }
    return min === Infinity ? 0 : min;
}


function minSubArrayLen2(arr, sum) {
    let min = Infinity;
    let left = 0;
    let windowSize = 1;
    let subarraySum = 0;

    while (left < arr.length) {
        subarraySum += arr[left + windowSize - 1];

        let sumSuccess = false;
        if (subarraySum >= sum) {
            if (windowSize == 1) return 1
            min = Math.min(min, windowSize)
            sumSuccess = true;
        }

        windowSize++;
        if (sumSuccess || left + windowSize > arr.length) {
            left++;
            windowSize = 1;
            subarraySum = 0;
        }
    }
    return min === Infinity ? 0 : min;
}

function minSubArrayLen1(arr, sum) {
    return minSubArrayLenRecursion(arr, sum, 1);
}

// O(n^2) !!
function minSubArrayLenRecursion(arr, sum, w) {
    if (w > arr.length) return 0

    for (let first = 0; first <= arr.length - w; first++) {
        if (subarraySum(arr, first, first + w - 1) >= sum) return w
    }
    return minSubArrayLenRecursion(arr, sum, w + 1);
}

function subarraySum(arr, first, last) {
    let sum = 0;
    for (let index = first; index <= last; index++) {
        sum += arr[index];
    }
    return sum;
}

console.log(minSubArrayLen([2, 3], 2)) // 1 -> because [2] is the smallest subarray
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0