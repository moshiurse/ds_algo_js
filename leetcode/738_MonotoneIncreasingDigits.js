// An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.

// Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.

 

// Example 1:

// Input: n = 10
// Output: 9
// Example 2:

// Input: n = 1234
// Output: 1234
// Example 3:

// Input: n = 332
// Output: 299
 

// Constraints:

// 0 <= n <= 109

var monotoneIncreasingDigits = function(n)
 {
     let str = String(n).split('');
     let length = str.length;
     let k = length;
     
     for (let i = length-1; i > 0; --i){
         if (str[i] < str[i - 1]) {
             --str[i - 1];
             k = i;
         }
     }
     for (let i = k; i < length; ++i){
             str[i] = '9';
     }
     return parseInt(str.join(''));
 };


console.log(monotoneIncreasingDigits(399443));//389999