// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

var detectCapitalUse = function(word) {
    let upper = false;
    let count = 0;
    if(word[0].toUpperCase() == word[0]){
        upper = true;
        count++;
    }
    for(let i = 1; i < word.length; i++){
        if(upper){
            if(word[i].toUpperCase() == word[i]) count++;
        }else{
            if(word[i].toUpperCase() == word[i]) return false;
        }
    }

    if(count != 0 && count != 1 && count != word.length) return false;

    return true;
};