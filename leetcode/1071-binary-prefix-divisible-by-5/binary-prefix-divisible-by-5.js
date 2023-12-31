/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let result = [];
    let bin = 0;
    for(let i = 0;i < nums.length; i++){
        bin = (bin % 5) * 2 + nums[i];
        result.push(( bin % 5 == 0));
    }
    return result
};