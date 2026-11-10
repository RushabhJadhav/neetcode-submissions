class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let currentSum = nums[0];
        let maxSum = nums[0];

        for (let i = 0; i < nums.length - 1; i++) {
            let next = nums[i + 1];

            if (nums[i] < next) {
                currentSum += next;
            } else {
                currentSum = next;
            }

            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}
