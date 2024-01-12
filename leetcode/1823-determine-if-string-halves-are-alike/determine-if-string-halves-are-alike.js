/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let len = s.length;
    for(let i = 0; i < len; i++){
        if(vowels.includes(s[i].toLowerCase())){
            if(i < len/2){
                count++;
            }else{
                count--;
            }
        }
    }

    return count == 0;
};