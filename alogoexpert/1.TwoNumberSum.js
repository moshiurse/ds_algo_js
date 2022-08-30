function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        const match = targetSum - num;
        if (match in nums) {
            return [match, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}