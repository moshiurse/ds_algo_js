// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let uniqueMap = {};
    for(let i = 0; i < s.length; i++){
        if(uniqueMap[s[i]]){
            uniqueMap[s[i]] = 'b';
        }else{
            uniqueMap[s[i]] = 'a';
        }
    }

    let index = -1;
    for(let i = 0; i < s.length; i++){
        if(uniqueMap[s[i]] == 'a'){
            index = i;
            break;
        }
    }
    
    console.log(uniqueMap);
    return index;
};

console.log(firstUniqChar("loveleetcode"));