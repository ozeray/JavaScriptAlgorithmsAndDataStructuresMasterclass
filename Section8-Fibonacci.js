console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}