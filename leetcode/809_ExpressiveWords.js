// Sometimes people repeat letters to represent extra feeling. For example:

// "hello" -> "heeellooo"
// "hi" -> "hiiii"
// In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".

// You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more.

// For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has a size less than three. Also, we could do another extension like "ll" -> "lllll" to get "helllllooo". If s = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = s.
// Return the number of query strings that are stretchy.



// Example 1:

// Input: s = "heeellooo", words = ["hello", "hi", "helo"]
// Output: 1
// Explanation: 
// We can extend "e" and "o" in the word "hello" to get "heeellooo".
// We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
// Example 2:

// Input: s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]
// Output: 3


// Constraints:

// 1 <= s.length, words.length <= 100
// 1 <= words[i].length <= 100
// s and words[i] consist of lowercase letters.

var expressiveWords = function (s, words) {
    let count = 0;
    let current = 0;

    while (current < words.length) {

        if (s == words[current]) {
            count++;
        }else if(words[current].length > s.length){
            // do nothing
        } else {
            let sIndex = 0;
            let wIndex = 0;

            let found = true;

            while (sIndex < s.length || wIndex < words[current].length) {
                if (s[sIndex] == words[current][wIndex]){
                    let countS = 0;
                    let countW = 0;
                    let char = s[sIndex];
                    while (s[sIndex] == char) {
                        sIndex++;
                        countS++;
                    }
                    while (words[current][wIndex] == char) {
                        wIndex++;
                        countW++;
                    }
                    if(countS < 3 && countW != countS) {
                        found = false;
                        break;
                    }
                    if(countS >= 3 && countW > countS ) {
                        found = false;
                        break;
                    }
                }else{
                    found = false;
                    break;
                }

            }

            // console.log(s[wIndex], words[current]);
            // if(s[wIndex]) found = false;

            if (found) {
                count++;
            }
        }

        current++;
        // console.log(current);
    }
    return count;
};

console.log(expressiveWords("aaa", ["aaaa"]));
console.log(expressiveWords("abcd", ["abc"]));