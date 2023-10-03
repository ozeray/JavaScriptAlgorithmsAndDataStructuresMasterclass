function reverse(str) {
    if (str.length === 1) return str;
    return str[0] + reverse(str.slice(1));
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'