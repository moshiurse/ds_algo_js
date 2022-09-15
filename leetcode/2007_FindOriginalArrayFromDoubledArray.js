// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

// Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

 

// Example 1:

// Input: changed = [1,3,4,2,6,8]
// Output: [1,3,4]
// Explanation: One possible original array could be [1,3,4]:
// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.
// Other original arrays could be [4,3,1] or [3,1,4].
// Example 2:

// Input: changed = [6,3,0,1]
// Output: []
// Explanation: changed is not a doubled array.
// Example 3:

// Input: changed = [1]
// Output: []
// Explanation: changed is not a doubled array.

var findOriginalArray = function(changed) {
    let length = changed.length;
    if(!length || (length % 2) != 0) return [];
    let count = 0;
    let original = [];

    changed.sort(function (a, b) {
        return a - b;
    })

    let map = {};
    for (let i = 0; i < length; i++) {
        if(map[changed[i]]){
            map[changed[i]]++;
        }else{
            map[changed[i]] = 1;
        }
    }

    if(map['0'] > 0 && map['0'] % 2 == 1) return [];

    for (let i = 0; i < length; i++) {
        if(map[changed[i]*2] && map[changed[i]]){
            if(map[changed[i]] == 0){
                delete map[changed[i]];
            } else{
                map[changed[i]]--;
            }
            if(map[changed[i]*2] == 0){
                delete map[changed[i]*2];
            } else{
                map[changed[i]*2]--;
            }
            original.push(changed[i]);
            count++;
            if(count == length/2) break;
        }
    }
    return count == length /2 ? original : [];
};

console.log(findOriginalArray([1,3,4,2,6,8]));
console.log(findOriginalArray([6,8,2,1,3,4]));
console.log(findOriginalArray([6,3,0,1]));