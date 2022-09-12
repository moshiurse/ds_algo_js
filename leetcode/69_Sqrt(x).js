// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

// Constraints:

// 0 <= x <= 231 - 1

var mySqrt = function(x) {
    if(x <= 1) return x;
    let left = 0;
    let right = (left + x) / 2; 
    if(right * right == x) return Math.trunc(right);
    return calc(left, right, x);
};

function calc(left, right, x) {
    let mid = (left + right) / 2;
    let result = mid * mid;
    if(result == x) return Math.trunc(mid);
    console.log(Math.round(left) ,Math.trunc(right), left, right);
    if(Math.floor(left) == Math.floor(right)) return Math.floor(left);

    if(result > x) {
        right = mid;
    }else{
        left = mid;
    }

    return calc(left, right, x);

}

// console.log(mySqrt(8));
console.log(mySqrt(2));