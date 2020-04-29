https://www.hackerrank.com/challenges/time-conversion/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {

var meridien = s.substring(8);
if(meridien == "PM"){
  if(parseInt(s.substring(0,2)) > 11){
    return s.substring(0,8);
  }else{
    return parseInt(s.substring(0,2))+ 12 + s.substring(2,8);
  }
  
}else{
  if(parseInt(s.substring(0,2)) > 11){
    return "00" + s.substring(2,8);
  }
  return s.substring(0,8);
}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
