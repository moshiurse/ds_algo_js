// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9


var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = 0;
        if(arr[i] == 0){
            if(i < arr.length - 1){
                i++;
                index = i;
                for(let j = arr.length - 1; j > index; j--){
                    arr[j] = arr[j-1];
                }
                arr[index] = 0;
            }
            
        }
    }
    return arr;
};

console.log(duplicateZeros([0,0,0,0,0,0,0]));