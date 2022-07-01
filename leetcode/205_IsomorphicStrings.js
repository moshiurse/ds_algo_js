// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function(s, t) {
    if(!s || !t) return false;
    if(s.length != t.length) return false;

    let map = {};
    let key = [];
    let value = [];
    for(let i = 0; i < s.length; i++){
        if(key.includes(s[i]) && map[s[i]] != t[i]){
            return false;
        }
        if(value.includes(t[i]) && map[s[i]] != t[i]){
            return false;
        }
        map[s[i]] = t[i];
        key.push(s[i]);
        value.push(t[i]);
    }
    return true;
};

console.log(isIsomorphic("foo", "bar"));