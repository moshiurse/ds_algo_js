// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

 

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.
 

// Constraints:

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

var heightChecker = function(heights) {
    let max = 101;
    let count = 0;
    let newArr = new Array(max).fill(0);
    for(let i = 0; i < heights.length; i++){
        newArr[heights[i]]++;
    }

    let arr = [];
    for(let i = 0; i < max; i++){
        for(let j = 0; j < newArr[i]; j++){
            arr.push(i);
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != heights[i]){
            count++;
        }
    }
    return count;
};

console.log(heightChecker([31,81,41,78,48,2,83,48,21,20,43,15,26,78,96,55,5,46,35,89,85,54,76,64,71,36,98,94,100,7,88,92,80,43,24,89,50,61,59,20,94,57,99,62,82,46,28,57,66,62,56,15,12,63,19,35,12,26,15,59,8,44,46,45,33,20,27,31,85,15,92,63,63,40,35,95,91,1,4,57,55,68,53,28,15,94,74,89,77,7,25,63,77,24,76,44]));