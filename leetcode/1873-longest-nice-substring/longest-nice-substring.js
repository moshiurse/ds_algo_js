/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let result = "";
    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j < s.length; j++){
            let str = s.substring(i, j+1);
            if(isNice(str)){
                if(result.length < str.length) result = str;
            }
        }
    }
    return result;
};

function isNice(str){
    for(var i=0; i<str.length; i++) {
        if (str[i] == str[i].toLowerCase()){
            if(str.indexOf(str[i].toUpperCase()) == -1) {
                return false;
            }
        }  else if(str[i] == str[i].toUpperCase()) {
            if(str.indexOf(str[i].toLowerCase()) == -1) {
                return false;
            }
        }
    }
    return true;
}
