// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false
 

// Constraints:

// 1 <= num <= 2^31 - 1

var isPerfectSquare = function(num) {
    let count = 1;
    let result = 1;
    while (result < num) {
        result = count * count;
        // console.log(result);
        count++;
    }

    return result == num;
};

console.log(isPerfectSquare(2147483647));