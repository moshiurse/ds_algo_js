//https://www.hackerrank.com/challenges/mini-max-sum/problem

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  var min = arr.indexOf(Math.min(...arr));
  var max = arr.indexOf(Math.max(...arr));
  var minSum = 0; 
  var maxSum = 0; 

  for(var i = 0; i < arr.length; i++){
    if(i !== max){
      minSum += arr[i];
    }
  }

    for(var j = 0; j < arr.length; j++){
    if(j !== min){
      maxSum += arr[j];
    }
  }

  console.log(minSum, maxSum);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
