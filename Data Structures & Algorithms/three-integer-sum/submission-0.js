class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = new Map();
    
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                for(let z = j + 1; z < nums.length; z++) {
                    if((nums[i] + nums[j] + nums[z]) === 0) {
                        let sum = [nums[i], nums[j], nums[z]].sort();
                        let string = JSON.stringify(sum);
                        if(!result.has(string)) {
                            result.set(string, sum)
                        }
                    }
                }
            }
        }

        return [...result.values()];
    }
}
