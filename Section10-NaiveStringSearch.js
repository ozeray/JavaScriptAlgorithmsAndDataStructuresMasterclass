function stringSearch(str, term) {
    let numOfOccurrences = 0;
    for (let strPointer = 0; strPointer < str.length; strPointer++) {
        for(let termPointer = 0;  termPointer < term.length; termPointer++) {
            if (term[termPointer] !== str[strPointer + termPointer]) break;
            if (termPointer === term.length - 1) numOfOccurrences++;
        }
    }
    return numOfOccurrences;
}

console.log(stringSearch("hmet", "ah"));
console.log(stringSearch("ahmet", "ah"));
console.log(stringSearch("ahmeta", "ah"));
console.log(stringSearch("ahmetah", "ah"));
console.log(stringSearch("ahmetaha", "ah"));
console.log(stringSearch("ahmetahah", "ah"));
console.log(stringSearch("ahmahetahah", "ah"));