class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        for (let i = 1; i < nums.length; i++) {
            let prev = nums[i - 1];

            if (nums[i] === undefined) {
                break;
            }

            if (nums[i] % 2 === 0 && prev % 2 === 0 || nums[i] % 2 === 1 && prev % 2 === 1) {
                return false;
            }
        }

        return true;
    }
}
