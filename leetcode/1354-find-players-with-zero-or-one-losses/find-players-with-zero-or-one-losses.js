/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let loss = {};
    for(let i = 0; i < matches.length; i++){
        if(loss[matches[i][0]] == undefined){
            loss[matches[i][0]] = 0;
        }
        if(loss[matches[i][1]] == undefined){
            loss[matches[i][1]] = 1;
        }else{
            loss[matches[i][1]]++;
        }
    }

    let keys = Object.keys(loss);
    let result = [[], []];
    for(let i = 0; i < keys.length; i++){
        if(loss[keys[i]] == 0){
            result[0].push(keys[i])
        }else if(loss[keys[i]] == 1){
            result[1].push(keys[i])
        }
    }

    return result;
};