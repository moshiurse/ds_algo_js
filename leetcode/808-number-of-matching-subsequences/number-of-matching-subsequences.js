/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let count = 0;
    let map = new Map();

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if (word.length > s.length) continue;
        if (isSubsequence(words[i], s, map)){
            count++
        }
    }

    return count;
};

const isSubsequence = (word, string, map) => {
    if (map.has(word)) return map.get(word); 
    let index = -1;
    for (const c of word){
        index = string.indexOf(c, index+1);
        if (index == -1){
            map.set(word, false);
            return false;
        }
    }
    map.set(word, true);
    return true
}