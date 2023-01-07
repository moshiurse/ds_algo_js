// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

 

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.
 

// Constraints:

// 1 <= n <= 104

var numSquares = function(n) {
    let i= 1;
    let numArr = [];
    while(i * i <= n) {
        numArr.push(i*i);
        i++;
    }

    let dp = [];
    for(let i = 0; i < numArr.length; i++) dp[i] = [];

    function recur(index, val) {
        if(val < 0 || index >= numArr.length) return Infinity;
        if(val == 0) return 0;
        if(dp[index] != undefined && dp[index][val] != undefined) return dp[index][val];
        return dp[index][val] = Math.min(1 + recur(index, val - numArr[index]), recur(index+1, val));
    }
    return recur(0, n);
};