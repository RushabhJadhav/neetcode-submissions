class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let duplicates = 0;
    
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                nums[duplicates] = nums[i];
                duplicates++
            }
        }

        return duplicates;
    }
}
