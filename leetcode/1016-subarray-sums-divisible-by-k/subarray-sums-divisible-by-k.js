/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0;
    let sum = 0;
    const freq = new Array(k).fill(0);
    freq[0] = 1;

    for (const n of nums) {
		sum = (sum + n) % k;
	   
		if (sum < 0)
			sum += k;
		
		count += freq[sum];
		freq[sum]++;
	}
    return count;
};