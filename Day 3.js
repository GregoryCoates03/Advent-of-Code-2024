const fs = require("fs");
let input;
let arr = [];
let arr2 = [];

fs.readFile("Day 3 Input.txt", (err, data) => {
    if (err) throw err;
    input = data.toString().trim();
    inputSplitting(input);
    console.log(solve());
    inputSplitting2(input);
    console.log(solve2());
});

const inputSplitting = (input) => {
    const matched = input.match(/mul\(\d+,\d+\)/g);
    for (match in matched) {
        arr.push(matched[match].substring(4, matched[match].length - 1).split(","));
    }
}

const solve = () => {
    let sum = 0;
    for (x in arr) {
        sum += arr[x][0] * arr[x][1];
    }
    return sum;
}

const inputSplitting2 = (input) => {
    const matched = input.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g);
    for (match in matched) {
        if (!(matched[match] === "do()" || matched[match] === "don't()")) {
            arr2.push(matched[match].substring(4, matched[match].length - 1).split(","));
        } else {
            arr2.push(matched[match]);
        }
    }
}

const solve2 = () => {
    let sum = 0;
    let enabled = true;
    for (x in arr2) {
        if (arr2[x] === "do()"){
            enabled = true;
            continue;
        }
        if (arr2[x] === "don't()"){
            enabled = false;
            continue;
        } else {
            if (enabled){
                sum += arr2[x][0] * arr2[x][1];
            }
        }
    }
    return sum;
}