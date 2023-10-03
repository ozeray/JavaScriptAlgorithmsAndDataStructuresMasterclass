console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false

console.log(isPalindrome('aaa')); // true
console.log(isPalindrome('aa')); // true
console.log(isPalindrome('aba')); // true
console.log(isPalindrome('ababa')); // true
console.log(isPalindrome('ababac')); // false
console.log(isPalindrome('abbac')); // false

function isPalindrome(str) {
    if (str.length < 2) return true;
    return str[0] === str.slice(-1) && isPalindrome(str.slice(1, - 1))
}