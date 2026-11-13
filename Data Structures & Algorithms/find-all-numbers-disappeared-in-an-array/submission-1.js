class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let disappeared = [];
        let set = new Set(nums);
        for (let i = 1; i <= nums.length; i++) {
            if (!set.has(i)) {
                disappeared.push(i);
            }
        }

        return disappeared;
    }
}
