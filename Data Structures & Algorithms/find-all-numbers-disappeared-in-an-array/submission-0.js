class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let disappeard = [];
        for (let i = 1; i <= nums.length; i++) {
            let isDisappeard = true;
            for (let j = 0; j < nums.length; j++) {
                if (i === nums[j]) {
                    isDisappeard = false;
                    break;
                }
            }
            if (isDisappeard) {
                disappeard.push(i);
            }
        }

        return disappeard;
    }
}
