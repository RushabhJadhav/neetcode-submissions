class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let increasing = 1;
        let decreasing = 1;
        let longestLength = 1;
        let prev = 0;

        for (let i = 1; i < nums.length; i++) {
            prev = nums[i - 1];

            if (nums[i] > prev) {
                increasing++;
                decreasing = 1;
            }

            if (nums[i] < prev) {
                decreasing++;
                increasing = 1;
            }

            if (nums[i] === prev) {
                increasing = 1;
                decreasing = 1;
            }

            longestLength = Math.max(longestLength, increasing, decreasing);
        }

        return longestLength;
    }
}
