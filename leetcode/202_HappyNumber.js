// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1
var isHappy = function(n) {
    let map = {};

    while (!map[n]) {
        map[n] = true;
        n = calculate(n);
        if(n == 1) return true;
    }

    return false;
};

function calculate(n) {
    let total = 0;
    let value = n;
    while (value >= 10) {
        let divendend = value % 10;
        value = Math.floor(value/10);
        total += divendend * divendend;
    }
    total += value * value;
    return total;
}


console.log(isHappy(111111));


// function cal(value) {
//     let total = 0;
//     while (value >= 10) {
//         let divendend =  value % 10;
//         value = Math.floor(value/10);
//         console.log(value);
//         total += divendend * divendend;
//         console.log('total',total, value, divendend);
//     }
//     total += value * value;
//     return total;
// }

// console.log(cal(10));