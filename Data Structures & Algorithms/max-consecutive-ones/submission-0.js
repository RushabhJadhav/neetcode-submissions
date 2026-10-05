class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxOnes = 0;
        let count = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 1) {
                count += 1;
            } else {
                count = 0;
            }

            if(count > maxOnes) {
                maxOnes = count;
            }
        }

        return maxOnes;
    }
}
