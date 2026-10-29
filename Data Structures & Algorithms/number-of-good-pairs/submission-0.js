class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let goodPairs = 0;

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (nums[i] === nums[j] && i < j) {
                    goodPairs++;
                }
            }
        }

        return goodPairs;
    }
}
