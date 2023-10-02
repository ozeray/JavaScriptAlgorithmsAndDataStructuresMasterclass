function averagePair1(sortedArr, avg) {
    if (sortedArr.length < 2) {
        return false;
    }

    let first = 0;
    let last = sortedArr.length - 1;

    if (sortedArr[first] > avg || sortedArr[last] < avg) {
        return false;
    }

    while (first < last) {
        if (sortedArr[last] > 2 * avg) {
            last--;
        } else {
            while (sortedArr[first] + sortedArr[last] < 2 * avg) {
                first++;
            }
            if (sortedArr[first] + sortedArr[last] === 2 * avg) {
                return true;
            } else {
                last--;
            }
        }
    }
    return false;
}

function averagePair(sortedArr, avg) {
    if (sortedArr.length < 2) {
        return false;
    }

    let first = 0;
    let last = sortedArr.length - 1;

    if (sortedArr[first] > avg || sortedArr[last] < avg) {
        return false;
    }

    while (first < last) {
        let tempAvg = (sortedArr[first] + sortedArr[last]) / 2
        if (tempAvg === avg) return true
        else if (tempAvg > avg) last--
        else first++
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false 