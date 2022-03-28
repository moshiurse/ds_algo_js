// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].

// Loop solution
// var countOdds = function(low, high) {
//     let count = 0;
//     for(let i = low; i <= high; i++){
//         if(i % 2 == 1){
//             count++;
//         }
//     }
//     return count;
// };

// Second solution
var countOdds = function(low, high) {
    let result = Math.floor(((high - low)+2)/2);
    if(low % 2 == 0 && high % 2 == 0){
        result--;
    }
    return result;
};

console.log(countOdds(8,10));