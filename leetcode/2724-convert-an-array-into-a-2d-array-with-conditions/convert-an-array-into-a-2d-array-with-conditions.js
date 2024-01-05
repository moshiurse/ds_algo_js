/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let maps = {};
    let result = [];
    for(let i = 0; i < nums.length; i++){
        if(maps[nums[i]] == undefined){
            maps[nums[i]] = 0;
        }else{
            maps[nums[i]] = maps[nums[i]] + 1;
        }
        if(result[maps[nums[i]]] == undefined){
            result[maps[nums[i]]] = [nums[i]];
        }else{
            result[maps[nums[i]]].push(nums[i])
        }
    }

    return result;
    
};