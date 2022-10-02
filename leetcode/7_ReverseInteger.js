// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

var reverse = function(x) {
    const MAX = (Math.pow(2,31) -1);
    const MIN = Math.pow(-2,31);

    let multiplier = 1;
    if(x < 0) multiplier = -1;
    
    let number = Math.abs(x);
    let reminder = 0;
    let r = 0;
    while (number >= 10) {
        reminder = number % 10;
        r = (number % 10) + (r * 10); 
        number = Math.floor(number / 10);
    }
    let result = multiplier * ((number % 10) + (r * 10));
    console.log(MIN, MAX);

    if(result > MAX || result < MIN) return 0;

    return result;
};

console.log(reverse(-121));