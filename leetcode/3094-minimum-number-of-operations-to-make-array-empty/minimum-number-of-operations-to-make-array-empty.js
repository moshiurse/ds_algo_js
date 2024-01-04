/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let maps = {};
    for(let i = 0; i < nums.length; i++){
        if(!maps[nums[i]]){
            maps[nums[i]] = 1;
        }else{
            maps[nums[i]] = maps[nums[i]] + 1;
        }
    }
    
    let keys = Object.keys(maps);
    let count = 0;
    for(let i = 0; i < keys.length; i++){
        if(maps[keys[i]] < 2){
            return -1;
        }
        count += check(maps[keys[i]]);
    }
    return count;

};

const check = (value) => {
    if(value < 2){
        return -1;
    }
    if(value == 2) return 1;
    if(value % 3 == 0) return value / 3;
    return Math.ceil(value / 3);
}