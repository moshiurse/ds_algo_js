// Check if a number is Armstrong Number or not
// Problem Statement: Given a number, check if it is Armstrong Number or Not.

// Examples:

// Example 1:
// Input:153 
// Output: Yes, it is an Armstrong Number
// Explanation: 1^3 + 5^3 + 3^3 = 153

// Input:170 
// Output: No, it is not an Armstrong Number
// Explanation: 1^3 + 7^3 + 0^3 != 170
// What are Armstrong Numbers?

// Armstrong Numbers are the numbers having the sum of digits raised to power no. of digits is equal to a given number. Examples- 0, 1, 153, 370, 371, 407, and 1634 are some of the Armstrong Numbers.

function armstrong(n) {
    if(n < 10) return true;

    let digit = 1;
    let number = n;
    while (number >= 10) {
        digit++;
        number  = Math.floor(number / 10);
    }

    let result = 0;
    number = n;
    while (number > 0) {
        let current  = number % 10;
        result += Math.pow(current, digit);
        number = Math.floor(number / 10);
    }

    if(result == n) return true;
    return false;

}

console.log(armstrong(370))