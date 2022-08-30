// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    if(x < 0) return false;
    let number = x;
    let reminder = 0;
    let r = 0;
    while (number >= 10) {
        reminder = number % 10;
        r = (number % 10) + (r * 10); 
        number = Math.floor(number / 10);
    }
    return x == (number % 10) + (r * 10);
};

console.log(isPalindrome(1009001));