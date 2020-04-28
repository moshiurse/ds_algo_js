//https://www.hackerrank.com/challenges/staircase/problem

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

// Complete the staircase function below.
function staircase(n) {
  for(var i = 1; i <= n; i++){
    var str = "";
    for(var j = 0; j < n-i; j++){
      str += " ";
    }
    for(var k = 0; k < n- (n-i); k++){
      str += "#";
    }
    console.log(str);
  }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
