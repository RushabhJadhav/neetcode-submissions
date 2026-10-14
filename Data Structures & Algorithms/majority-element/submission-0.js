class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let elements = new Map();

        for (let item of nums) {
            if (elements.has(item)) {
                let count = elements.get(item);
                elements.set(item, count + 1);
            } else {
                elements.set(item, 1)
            }
        }

        return [...elements.entries()].sort((a, b) => b[1] - a[1])[0][0];
    }
}
