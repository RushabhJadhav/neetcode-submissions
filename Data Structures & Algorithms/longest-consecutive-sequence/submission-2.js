class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         if (nums.length === 0) return 0;

        const uniqueNums = [...new Set(nums)].sort((a, b) => a - b);

        let currentLength = 1;
        let longestLength = 1;

        for (let i = 1; i < uniqueNums.length; i++) {
            if (uniqueNums[i] - uniqueNums[i - 1] === 1) {
                currentLength++;
            } else {
                longestLength = Math.max(longestLength, currentLength);
                currentLength = 1;
            }
        }

        return Math.max(longestLength, currentLength);
    }
}
