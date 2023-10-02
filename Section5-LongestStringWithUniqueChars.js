function longestStringWithUniqueChars1(str) {
    if (str.length < 2) {
        return str;
    }

    let visited = {};
    let longest = {};
    let right = 0;

    while (right < str.length) {
        let rightChar = str.charAt(right);
        if (!isAlphaNumeric(rightChar)) {
            return "Non-alphaNumeric character found";
        }

        if (visited[rightChar] === undefined) {
            visited[rightChar] = right;
            if (Object.keys(visited).length > Object.keys(longest).length) {
                longest = visited;
            }
        } else {
            let left = visited[rightChar] + 1;
            visited = {}
            let leftChar = str.charAt(left);
            visited[leftChar] = left;
            visited[rightChar] = right;
        }
        right++;
    }
    return Object.keys(longest).join("");
}

function longestStringWithUniqueChars(str) {
    if (str.length < 2) {
        return str;
    }

    let longest = 0;
    let i = 0;
    let first = 0;
    let lastIndexes = new Array(256).fill(-1);

    for (let j = 0; j < str.length; j++) {
        const char = str.charAt(j);
        const lastCharIndex = lastIndexes[char.charCodeAt(0)];

        i = Math.max(i, lastCharIndex + 1);

        if (j - i + 1 > longest) {
            longest = j - i + 1;
            first = i;
        }

        lastIndexes[char.charCodeAt(0)] = j;

    }

    return str.slice(first, longest + first);
}

function isAlphaNumeric(ch) {
    let code = ch.charCodeAt(0);
    if ((code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122) ||
        (code >= 48 && code <= 57)) {
        return true;
    }
    return false;
}


console.log(longestStringWithUniqueChars("ali"));
console.log(longestStringWithUniqueChars("iali"));
console.log(longestStringWithUniqueChars("ab"));
console.log(longestStringWithUniqueChars("abbb"));
console.log(longestStringWithUniqueChars("a, b"));
console.log(longestStringWithUniqueChars("hellothere"));
console.log(longestStringWithUniqueChars("hellotthhheereeeabcdddddd"));
console.log(longestStringWithUniqueChars("hellotherexyzabc"));
console.log(longestStringWithUniqueChars("hellothcrexyzabc"));
console.log(longestStringWithUniqueChars("hhhhelllllottthgrexyzabcccc"));
console.log(longestStringWithUniqueChars("hhhh"));
console.log(longestStringWithUniqueChars("hhhhel"));
console.log(longestStringWithUniqueChars("hhhhellooooooooooo"));
console.log(longestStringWithUniqueChars("hhhheellooooooooooo"));