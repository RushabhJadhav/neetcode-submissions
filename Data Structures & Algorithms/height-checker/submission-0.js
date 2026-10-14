class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let count = 0;
        const sorted = [...heights].sort((a, b) => a - b);

        for (let i = 0; i < heights.length; i++) {
            if (heights[i] !== sorted[i]) {
                count += 1;
            }
        }

        return count;
    }
}
