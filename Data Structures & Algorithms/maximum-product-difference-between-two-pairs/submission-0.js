class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        let sorted = [...nums].sort((a, b) => a - b);
        let length = sorted.length;

        return Math.abs((sorted[0] * sorted[1]) - (sorted[length - 1] * sorted[length - 2]))
    }
}
