// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

// Return the shortest such subarray and output its length.

 

// Example 1:

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Example 3:

// Input: nums = [1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105
 

// Follow up: Can you solve it in O(n) time complexity?

var findUnsortedSubarray = function (nums) {
    let smallest = Infinity;
    let largest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        if (outOfOrder(nums, i)) {
            smallest = Math.min(smallest, x);
            largest = Math.max(largest, x);
        }
    }
    if (smallest == Infinity) return 0;
    let left = 0;
    let right = nums.length - 1;
    while (smallest >= nums[left]) {
        left++;
    }
    while (largest <= nums[right]) {
        right--;
    }
    return right - left + 1;
};

function outOfOrder(arr, i) {
    let x = arr[i];
    if (i == 0) {
        return x > arr[1];
    }
    if (i == arr.length - 1) {
        return x < arr[i - 1];
    }
    return x < arr[i - 1] || x > arr[i + 1];
}