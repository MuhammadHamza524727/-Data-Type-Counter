var arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

    var countOfNum = 0;
    var countOfStr = 0;
    var countOfBool = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (typeof element === 'number') {
            countOfNum++;
        } else if (typeof element === 'string') {
            countOfStr++;
        } else if (typeof element === 'boolean') {
            countOfBool++;
        } else{"any things is wrong"}
    }


console.log(`Numbers: ${countOfNum}`);
console.log(`Strings: ${countOfStr}`);
console.log(`Booleans: ${countOfBool}`);
