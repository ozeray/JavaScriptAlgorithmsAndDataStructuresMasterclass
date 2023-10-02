function sameFrequency1(num1, num2) {
    let digits1 = getDigits(num1);
    let digits2 = getDigits(num2);

    if (digits1.length !== digits2.length) {
        return false;
    } else {
        let digitFrequencies1 = {};
        for (let digit of digits1) {
            digitFrequencies1[digit] = ++digitFrequencies1[digit] || 1;
        }

        for (let digit of digits2) {
            if (!digitFrequencies1[digit]) {
                return false;
            }
            digitFrequencies1[digit] -= 1;
        }
        return true;
    }
}

function getDigits(num) {
    let digits = [];
    let n = num;
    while (n > 0) {
        const digit = n % 10;
        digits.push(digit);
        n = Math.floor(n / 10);
    }
    return digits;
}

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length != str2.length) {
        return false;
    }

    let str1Freq = {};
    for (const char of str1) {
        str1Freq[char] = ++str1Freq[char] || 1;
    }

    for (const char of str2) {
        if (!str1Freq[char]) {
            return false;
        }
        str1Freq[char] -= -1;
    }
    return true;
}

console.log(sameFrequency(22, 222));
console.log(sameFrequency(122, 212));
console.log(sameFrequency(43, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(122, 212));