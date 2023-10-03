function isSubsequence1(str1, str2) {
    if (str1.length < 1) return false;
    if (str1.length > str2.length) return false;

    let first = 0;
    let second = 0;

    while (first < str1.length) {
        if (second === str2.length) return false;

        if (str2[second] !== str1[first]) second++;
        else first++;
    }

    return true;
}

function isSubsequence(str1, str2) {
    if (str1.length < 1) return false;
    if (str1.length > str2.length) return false;

    let first = 0;
    let second = 0;

    while (second < str2.length) {
        if (str2[second] === str1[first]) first++;
        if (first === str1.length) return true;
        second++;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)