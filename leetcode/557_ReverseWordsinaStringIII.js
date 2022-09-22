// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

var reverseWords = function(s) {
    let strArray = [];
    let count = 0;
    let tempStr = "";
    while (count < s.length) {
        if(s[count] == " " && tempStr != ""){
            strArray.push(tempStr);
            tempStr = "";
        }else{
            tempStr += s[count];
        }
        count++;
    }
    if(tempStr != "") strArray.push(tempStr);

    for (let i = 0; i < strArray.length; i++) {
        let val = "";
        for (let j = strArray[i].length-1; j >= 0 ; j--) {
           val += strArray[i][j];
        }
        strArray[i] = val;
    }
    return strArray.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));