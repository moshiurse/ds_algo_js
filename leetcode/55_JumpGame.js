// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

// var canJump = function(nums) {
//     if(nums.length == 1) return true;
//     let index = 0;
//     let lastIndex = nums.length-1
//     let isFinish = false;
//     let dp = []; 

//     function recur(index) {
//         if(index == lastIndex) return true;
//         if(nums[index] == 0) return false;
//         if (dp[index] != undefined) return dp[index];   
//         let high = index + nums[index];
//         if(high >= lastIndex){
//             isFinish = true;
//         }
//         if(!isFinish){
//             for (let i = index; i <= high; i++) {
//                 if(i == lastIndex) {
//                     isFinish = true;
//                     break;
//                 }
//             }
//         }

//         if(!isFinish) {
//             for (let i = index; i <= high; i++) {
//                 isFinish || recur(index + i);
//             }
//         }
//         return dp[index] = isFinish;
//     }

//     return isFinish || recur(index);
// };
const canJump_ = nums => {
    let result = false; 
    let dp = []; 

    const check = index => {
        if (index == nums.length - 1) return true; 
        if (nums[index] == 0) return false;
        if (index + nums[index] >= nums.length - 1) return true; 
        if (dp[index] != undefined) return dp[index]; 

        for (let i = 1; i <= nums[index]; i++) {
            result = result || check(index + i);
        }
        return dp[index] = result; 
    }

    return check(0);
}





// console.log(canJump([3,0,8,2,0,0,1]));
console.log(canJump([8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5]));