// An array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// You must solve it in O(log(arr.length)) time complexity.

 

// Example 1:

// Input: arr = [0,1,0]
// Output: 1
// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1
 

// Constraints:

// 3 <= arr.length <= 105
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length-1;
    let index = undefined;

    while (left < right) {
        let mid = Math.floor((left+right)/2);
        if(arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) {
            index = mid;
            break;
        } 

        if(arr[mid] < arr[mid+1]) {
            left = mid + 1;
        }else if(arr[mid] < arr[mid-1]){
            right = mid - 1;
        }

    }

    if(!index) return left;
    return index;

};

console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray([0,10,11,5,2]));
console.log(peakIndexInMountainArray([0,1,2,3,1,0]));