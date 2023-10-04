let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

function stringifyNumbers(obj) {
    let result = {};
    if (!isAnObjectWithData(obj)) return obj;
    for (const key in obj) {
        let value = obj[key];
        if (typeof value === 'number') result[key] = value.toString();
        else if (isAnObjectWithData(value)) result[key] = stringifyNumbers(obj[key]);
        else result[key] = obj[key];
    }
    return result

    function isAnObjectWithData(obj) {
        return obj && typeof obj === 'object' && obj.constructor === Object;
    }
}

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/