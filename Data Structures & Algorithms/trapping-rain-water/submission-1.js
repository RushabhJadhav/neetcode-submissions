class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = []
        let maxRight = []
        let result = 0;

        let leftMax = 0;
        let rightMax = 0;

        for(let i = 0; i < height.length; i++) {
            leftMax = Math.max(leftMax, height[i]);
            maxLeft[i] = leftMax;
        }

        for(let i = height.length - 1; i >=0; i--) {
            rightMax = Math.max(rightMax, height[i]);
            maxRight[i] = rightMax;
        }

        for(let i = 0; i < height.length; i++) {
            let trappedWater = Math.min(maxLeft[i], maxRight[i]) - height[i];

            if(trappedWater > 0) {
                result += trappedWater;
            }
        }

        return result;
    }
}
