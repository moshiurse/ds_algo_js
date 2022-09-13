// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false
 

// Constraints:

// 0 <= c <= 231 - 1

var judgeSquareSum = function(c) {
    let count = 0;
    let array = [];
    while(1) {
        let sum = count * count;
        if(sum <= c){
            array.push(sum);
        }else{
            break
        }
        count++;
    }
    console.log(array);
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
       if((array[left] + array[right]) == c) return true; 
       if((array[left] + array[right]) > c){
        right--;
       }else{
           left++;
       }
    }

    return false;
};

console.log(judgeSquareSum(2000));