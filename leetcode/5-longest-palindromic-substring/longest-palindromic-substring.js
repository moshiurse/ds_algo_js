/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    let dp = Array.from({ length: len }, () => []);
    let res = [0,0];

    for(let i = 0; i < len; i++){
        dp[i][i] = true
    }

    for(let i = 0; i < len-1; i++){
        if(s.charAt(i) == s.charAt(i+1)){
            dp[i][i+1] = true;
            res = [i, i+1];
        }
    }

    for(let rem = 2; rem < len; rem++){
        for(let i = 0; i< len - rem; i++){
            let col = i + rem;
            if(s.charAt(i) == s.charAt(col) && dp[i+1][col-1]){
                dp[i][col] = true;
                res = [i, col];
            }
        }
    }
    return s.substring(res[0], res[1]+1);
};
