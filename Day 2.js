const fs = require("fs");
let input;
let arr = [];

fs.readFile("Day 2 Input.txt", (err, data) => {
    if (err) throw err;
    input = data.toString().trim();
    inputSplitting(input);
    console.log(safe(arr));
    console.log(actuallySafe(arr));

});

const inputSplitting = (input) => {
    const rows = input.split("\n");
    for (row in rows) {
        const splitArr = rows[row].split(" ");
        let separated = [];
        for (let i = 0; i < splitArr.length; i++){
            separated.push(splitArr[i]);
        }
        arr.push(separated);
    }
}

const safe = (input) => {
    let count = 0;
    loop1:
        for (row in input) {
            let incOrDec = 0;
            for (let i = 0; i < input[row].length - 1; i++){
                const diff = input[row][i + 1] - input[row][i];
                if (i === 0){
                    if (diff < 0){
                        incOrDec = -1;
                    } else {
                        incOrDec = 1;
                    }
                } else {
                    if (incOrDec === -1){
                        if (diff > 0){
                            continue loop1;
                        }
                    }
                    if (incOrDec === 1){
                        if (diff < 0){
                            continue loop1;
                        }
                    }
                }
                const absDiff = Math.abs(diff);
                if (!(absDiff >= 1 && absDiff <= 3)){
                    continue loop1;
                }
            }
            count++;
        }
    return count;
}

const actuallySafe = (input) => {
    let count = 0;
    loop1:
        for (row in input) {
            let incOrDec = 0;
            let badValues = 0;
            for (let i = 0; i < input[row].length - 1; i++){
                const diff = input[row][i + 1] - input[row][i];
                if (i === 0){
                    if (diff < 0){
                        incOrDec = -1;
                    } else {
                        incOrDec = 1;
                    }
                } else {
                    if (incOrDec === -1){
                        if (diff > 0){
                            badValues++;
                            if (badValues > 1){
                                continue loop1;
                            }
                        }
                    }
                    if (incOrDec === 1){
                        if (diff < 0){
                            badValues++;
                            if (badValues > 1){
                                continue loop1;
                            }
                        }
                    }
                }

                const absDiff = Math.abs(diff);
                if (!(absDiff >= 1 && absDiff <= 3)){
                    badValues++;
                    if (badValues > 1){
                        continue loop1;
                    }
                }
            }
            count++;
        }
    return count;
}