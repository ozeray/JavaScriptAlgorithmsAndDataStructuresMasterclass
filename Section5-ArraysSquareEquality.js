function square_equality(arr, sqr_arr) {
    if (arr.length !== sqr_arr.length) {
        return false;
    }

    let frequencyCounter2 = {}    
    for (let elem of sqr_arr) {
        frequencyCounter2[elem] = ++frequencyCounter2[elem] || 1; 
    }
    
    for(let elem of arr) {
        if (!(frequencyCounter2[elem ** 2])) {
            return false;        
        }
        frequencyCounter2[elem ** 2] -= 1;                
    }
    
    return true;
}

console.log(square_equality([1,2,2,5], [4,4,1,11]));
console.log(square_equality([1,2,2], [4,4,1]));
console.log(square_equality([2, 2, 2, 2], [4, 9, 1, 4]));
console.log(square_equality([2, 2, 2, 2], [4, 4, 4, 4]));