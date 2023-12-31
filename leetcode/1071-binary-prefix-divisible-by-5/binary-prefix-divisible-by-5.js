/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let result = [];
    let bin = 0;
    for(let i = 0;i < nums.length; i++){
        bin = (bin  * 2 + nums[i]) % 5;
        result.push(bin == 0);
    }
    return result
};