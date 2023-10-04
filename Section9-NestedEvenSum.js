function nestedEvenSum(obj) {
    let result = 0;

    function summer(obj) {
        if (isAnEvenNumber(obj)) {
            result += obj;
            return;
        }
        if (!isAnObjectWithData(obj)) return;
        for (const key in obj) {
            summer(obj[key]);
        }
    }

    function isAnObjectWithData(obj) {
        return obj && typeof obj === 'object' && obj.constructor === Object && Object.keys(obj).length > 0;
    }

    function isAnEvenNumber(element) {
        return typeof element === 'number' && element % 2 === 0;
    }

    summer(obj);
    return result;
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10