//https://www.hackerrank.com/challenges/plus-minus/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    var positiveCount = 0;
    var negtetiveCount = 0;
    var zeroCount = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            zeroCount++;
        }else if(arr[i] < 0){
            negtetiveCount++;
        }else{
            positiveCount++;
        }
    }

    console.log((positiveCount/arr.length).toFixed(6));
    console.log((negtetiveCount/arr.length).toFixed(6));
    console.log((zeroCount/arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
