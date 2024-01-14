/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length != word2.length) return false; 
    let map1 = {};
    let map2 = {};

    for(let i = 0; i < word1.length; i++){
        if(!map1[word1[i]]){
            map1[word1[i]] = 1
        }else{
            map1[word1[i]]++;
        }
        if(!map2[word2[i]]){
            map2[word2[i]] = 1
        }else{
            map2[word2[i]]++;
        }
    }

    if( ([...Object.values(map1)].sort().join("") != [...Object.values(map2)].sort().join("")) || ([...Object.keys(map1)].sort().join("") != [...Object.keys(map2)].sort().join(""))) return false

    return true;

};