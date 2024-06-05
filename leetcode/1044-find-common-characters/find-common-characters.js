/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];
    let nums = [...words];
    for(let i = 0; i < nums[0].length; i++){
        let find = true;
        for(let j = 1; j < nums.length; j++){
            if(!nums[j].includes(nums[0][i])){
                find = false;
            }else{
                nums[j] = nums[j].replace(nums[0][i], '');
            }
        }
        if(find) result.push(nums[0][i])
        
    }

    return result;

};