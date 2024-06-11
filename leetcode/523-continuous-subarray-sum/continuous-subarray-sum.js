/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const remainder = { 0: -1 }; // map remainder
    let found = false;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
      const r = total % k;
      if (!(r in remainder)) {
        remainder[r] = i;
      } else if (i - remainder[r] > 1) {
        found = true;
        break;
      }
    }

    return found;
};