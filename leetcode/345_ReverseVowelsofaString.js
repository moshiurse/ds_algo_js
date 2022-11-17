// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

var reverseVowels = function(s) {
    let vowelslist = ['a','e','i','o','u','A', 'E', 'I', 'O', 'U'];
    let vowel = [];
    for(let i = 0; i < s.length; i++){
        if(vowelslist.includes(s[i])){
            vowel.push(s[i])
        }
    }
    let str = s.split('');
    for(let i = 0; i < str.length; i++){
        if(vowelslist.includes(str[i])){
            str[i] = vowel.pop();
        }
    }
    return str.join('');
};