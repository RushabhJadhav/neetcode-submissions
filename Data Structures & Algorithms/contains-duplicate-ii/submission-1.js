class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let i = 0;

        while (i < nums.length) {
            let j = i + 1;
            while (j < nums.length) {
                if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                    return true;
                }
                j++;
            }
            i++;
        }

        return false;
    }
}
