// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

var strStr = function(haystack, needle) {
    let current = 0;
    let neddleIndex = 0;
    let index = -1;

    while (current < haystack.length && neddleIndex < needle.length) {
        console.log(neddleIndex, current, haystack[current] == needle[neddleIndex]);
        if(haystack[current] == needle[neddleIndex]){
            if(neddleIndex == 0) {
                index = current;
            }
            neddleIndex++;
        }else{
            neddleIndex = 0;
            if(index != -1) current = index;
            index = -1;
        }
        current++;
    }

    if(neddleIndex != needle.length) index = -1;

    return index;
};

console.log(strStr("mississippi", "pi"));