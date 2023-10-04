const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

function collectStrings(obj) {
    let result = [];

    function collect(obj) {
        if (typeof obj === 'string') result.push(obj);
        else for (const key in obj) collect(obj[key]);
    }

    collect(obj);
    return result;
}
