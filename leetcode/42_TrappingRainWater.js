// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let low = 0;
    let result = 0;

    while(left <= right) {
        // console.log(height[left]);
        if(height[left] <= height[right]) {
            let remain = low - height[left];
            result += remain > 0 ? remain : 0;
            low = low < height[left] ? height[left] : low;
            left++;
        }else{
            let remain = low - height[right];
            result += remain > 0 ? remain : 0;
            low = low < height[right] ? height[right] : low;
            right--;
        }
    }

    return result;
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.log(trap([4,2,0,3,2,7]));
console.log(trap([2,1,1]));