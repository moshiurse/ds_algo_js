// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

 

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Example 3:

// Input: n = 0
// Output: 0
 

// Constraints:

// 0 <= n <= 104
 

// Follow up: Could you write a solution that works in logarithmic time complexity?


var trailingZeroes = function() {
    let map = {};

    return function recur(n) {
        if(map[n]){
            return map[n];
        }else{
            if(n < 5) return 0;
            map[n] = Math.floor(n/5) + recur(Math.floor(n/5));
            return map[n];
        }
    }
    
};

const fac = trailingZeroes();
console.log(fac(25));

// console.log(trailingZeroes(9999));