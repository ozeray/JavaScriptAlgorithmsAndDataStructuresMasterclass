function capitalizeFirst(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    return newArr.concat(arr[0][0].toUpperCase() + arr[0].substring(1), capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
