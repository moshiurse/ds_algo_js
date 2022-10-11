// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

var increasingTriplet = function(nums) {
    let length = nums.length;
    let current = 1;
    let result = false;
    let t1,t2,t3;
    t1 = nums[0];
    while(current < length){
        if(t1 < nums[current]){
            if(t2 == undefined || (t2 > nums[current] && nums[current] > t1)){
                t2 = nums[current];
            }else if(t3 == undefined && nums[current] > t2){
                t3 = nums[current];
            }
        }else{
            t1 = nums[current];
        }

        if(t1 != undefined && t2 != undefined && t3 != undefined){
            result = true;
        }
        if(result) {
            break;
        }else{
            current++
        }
    }
    return result;
};