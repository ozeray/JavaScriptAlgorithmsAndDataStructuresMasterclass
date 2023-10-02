function first_zero_sum(arr) {
    if (arr.length < 2) {
        return [];
    }

    let pointer1 = 0;
    let pointer2 = arr.length - 1;
    while (pointer1 < pointer2) {
        let sum = arr[pointer1] + arr[pointer2];
        if (sum === 0) {
            return [arr[pointer1], arr[pointer2]];
        } else if (sum > 0) {
            pointer2--;
        } else {
            pointer1++;
        }
    }    

    return [];
}

console.log(first_zero_sum([1]));
console.log(first_zero_sum([-1,1,2]));
console.log(first_zero_sum([-3,-2,-1,0,1,2,3]));
console.log(first_zero_sum([-3,-2,-1,0,1,2,4]));
console.log(first_zero_sum([-2,0,1,3]));
console.log(first_zero_sum([1,2,3]));