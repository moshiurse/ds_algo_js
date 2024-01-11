/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let result = []
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let map1 = {};
        let map2 = {};
        let isOk = true;
        for(let j = 0; j < word.length; j++){
            if(!map1[word[j]]){
                map1[word[j]] = pattern[j];
            }else{
                if(map1[word[j]] != pattern[j]){
                    isOk = false;
                    break;
                }
            }
            if(!map2[pattern[j]]){
                map2[pattern[j]] = word[j];
            }else{
                if(map2[pattern[j]] != word[j]){
                    isOk = false;
                    break;
                }
            }
            if(j == pattern.length-1 && isOk){
                result.push(word);
            }
        }
    }
    return result;
};