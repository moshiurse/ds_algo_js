// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

var convert = function(s, numRows) {
    if(numRows == 1) return s;
    let rowIndex = numRows - 1;

    let output = [];
    let count = 0;
    let current = 0;
    let operand = 0;
    while (current < s.length) {
        if(current <= rowIndex){
            output[count] = [s[current]];
            if(count != rowIndex) count++;
            operand = -1;
        }else{
            count += operand;
            console.log('count', count, current);
            output[count].push(s[current]);
            if(count == 0) operand = 1;
            if(count == rowIndex) operand = -1;
        }
        current++;
    }
    console.log(output);

    let str = "";
    for (let i = 0; i < output.length; i++) {
        str += output[i].join("")
    }
    return str;
};

console.log(convert("PAYPALISHIRING", 1));