/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = [[]];

    for(let num of nums){
        let newSubs =[];
        for(let curr of output){
            let temp = curr.slice();
            temp.push(num);
            newSubs.push(temp);
        }
        for (let curr of newSubs) {
            output.push(curr);
        }
        
    }
    return output;
};