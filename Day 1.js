const fs = require("fs");
let input;
let arr1 = [];
let arr2 = [];

fs.readFile("Day 1 Input.txt", (err, data) => {
    if (err) throw err;
    input = data.toString();
    inputSplitting(input);
    console.log(difference(arr1, arr2));
    console.log(similarity(arr1, arr2));
});

const inputSplitting = (input) => {
    const rows = input.split("\n");
    for (row in rows) {
        const splitArr = rows[row].split(" ");
        arr1.push(splitArr[0]);
        arr2.push(splitArr[3]);
    }
    arr1 = arr1.sort();
    arr2 = arr2.sort();
}

const difference = (left, right) => {
    let diff = 0;
    for (let i = 0; i < left.length; i++){
        diff += Math.abs(left[i] - right[i]);
    }
    return diff;
}

const similarity = (left, right) => {
    let score = 0;
    let count = 0;
    for (let i = 0; i < left.length; i++){
        const index = right.indexOf(left[i]);
        if (index != -1){
            count++;
            for (let j = (index + 1); j < right.length; j++){
                if (left[i] === right[j]){
                    count++;
                } else {
                    break;
                }
            }
        }
        score += (left[i] * count);
        count = 0;
    }
    return score;
}