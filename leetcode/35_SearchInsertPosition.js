// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length-1;
    let index = undefined;

    if(nums[nums.length - 1] < target) return nums.length;
    if(nums[0] > target) return 0;


    while (left < right) {
        let mid = Math.floor((left+right)/2);
        if(nums[mid] == target) {
            index = mid;
            break;
        } 

        if(nums[mid] < target) {
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    if(index >= 0){
        return index;
    }else{
        if(nums[left] == target || nums[left] > target) {
            return left;
        }else if(nums[left] < target){
            return left + 1;
        }
    } 
    
};

console.log(searchInsert([1,2,3,5,8], 7));