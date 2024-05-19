/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i++){
        map[s[i]] = map[s[i]] ? map[s[i]]+1 : 1;
    }
    let entries = Object.entries(map);
    entries.sort((a, b) => b[1] - a[1]);
    console.log(entries);
    let result = entries.map(entry => entry[0].repeat(entry[1])).join('');
    return result
};