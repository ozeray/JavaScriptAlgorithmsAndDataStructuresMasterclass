function findLongestSubstring(str) {
    let visited = {}
    let first = 0;
    let longestLength = 0;

    for (let j = 0; j < str.length; j++) {
        const char = str[j];

        if (visited[char] === undefined || visited[char] < first) {
            longestLength = Math.max(longestLength, j - first + 1);
        } else {
            first = visited[char] + 1;
        }
        visited[char] = j;
    }

    return longestLength;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6