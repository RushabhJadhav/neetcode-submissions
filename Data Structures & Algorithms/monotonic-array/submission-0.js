class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let ascending = true;
        let descending = true;
        let prev = 0;

        for (let i = 1; i < nums.length; i++) {
            prev = nums[i - 1];

            if (prev < nums[i]) {
                descending = false;
            }

            if (prev > nums[i]) {
                ascending = false;
            }

            if (!ascending && !descending) {
                return false;
            }
        }

        return true;
    }
}
