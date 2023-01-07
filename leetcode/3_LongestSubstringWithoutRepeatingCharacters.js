// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0;
    let len = s.length;
    let map = {};
    let maxSub = 0;
    while(j < len){
        if(map[s[j]] == undefined){
            map[s[j]] = j;
        }else{
            if(map[s[j]] >= i){
                i = map[s[j]] + 1;
            }
            map[s[j]] = j;
        }
        maxSub = Math.max(maxSub, j-i+1);
        j++;
    }

   return maxSub;
};