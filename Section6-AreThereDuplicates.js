function areThereDuplicates_FrequencyCounter(...arr) {
    if (arr.length < 2) {
        return false;
    }

    let freq = {}

    for (const elem of arr) {
        freq[elem] = ++freq[elem] || 1;
    }

    for (const elem of arr) {
        if (freq[elem] > 1) {
            return true;
        }
    }
    return false;
}

/*
console.log(areThereDuplicates_FrequencyCounter(1, 2, 3)); // false
console.log(areThereDuplicates_FrequencyCounter(1, 2, 2)); // true 
console.log(areThereDuplicates_FrequencyCounter('a', 'b', 'c', 'a')); // true 
*/

function areThereDuplicates_OneLiner(...arr) {
    return new Set(arr).size !== arr.length;
}

function areThereDuplicates_MultiplePointers1(...arr) {
    if (arr.length < 2) {
        return false;
    }

    let first = 0;
    let second = 1;
    let freq = {}

    while (first < arr.length || second < arr.length) {
        const firstElem = arr[first];
        const secondElem = arr[second];
        freq[firstElem] = ++freq[firstElem] || 1;
        freq[secondElem] = ++freq[secondElem] || 1;
        if (freq[firstElem] > 1 || freq[secondElem] > 1) {
            return true;
        }
        first += 2;
        second += 2;
    }
    return false;
}

function areThereDuplicates_MultiplePointers(...arr) {
    if (arr.length < 2) {
        return false;
    }

    arr.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })

    let first = 0;
    let second = 1;

    while (second < arr.length) {
        if (arr[first] === arr[second]) {
            return true;
        }
        first++;
        second++;
    }

    return false;
}

console.log(areThereDuplicates_MultiplePointers(1, 2, 3)); // false
console.log(areThereDuplicates_MultiplePointers(3, 2, 3)); // true
console.log(areThereDuplicates_MultiplePointers(1, 2, 2)); // true 
console.log(areThereDuplicates_MultiplePointers(1, 2)); // false
console.log(areThereDuplicates_MultiplePointers(2, 2)); // true 
console.log(areThereDuplicates_MultiplePointers(2)); // false
console.log(areThereDuplicates_MultiplePointers('a', 'b', 'c', 'a')); // true 
console.log(areThereDuplicates_MultiplePointers('a', 'b', 'c', 'e', 'd')); // false 
