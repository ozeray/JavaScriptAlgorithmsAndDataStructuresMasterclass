function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter = prepareFrequencyCounter(str2);
    
    for (let char of str1) {
        if (!frequencyCounter[char]) {
            return false;
        }
        frequencyCounter[char] -= 1;
    }
    return true;
}

function prepareFrequencyCounter(str) {
    let frequencyCounter = {}
    for (let char of str) {
        frequencyCounter[char] = ++frequencyCounter[char] || 1;
    }  
    return frequencyCounter;
}

console.log(validAnagram("ali", "la"));
console.log(validAnagram("ali", "lia"));
console.log(validAnagram("ali", "lic"));