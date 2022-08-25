// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for (let i = 0; i < magazine.length; i++) {
        if(map[magazine[i]]){
            map[magazine[i]] = map[magazine[i]] + 1;
        }else{
            map[magazine[i]] = 1;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if(!map[ransomNote[i]]) return false;
        if(map[ransomNote[i]]) {
            if (map[ransomNote[i]] == 1){
                delete map[ransomNote[i]];
            }else{
                map[ransomNote[i]] = map[ransomNote[i]] - 1;
            }
        }
    }
    return true;
};

console.log(canConstruct('aaab', 'baba'));