class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
    
        for(let i = 0; i < nums.length; i++) {
            let productItems = [];
            for(let j = 0; j < nums.length; j++) {
                if(i != j) {
                    productItems.push(nums[j]);
                }
            }
            arr.push(productItems.reduce((acc, curr) => acc *= curr))
        }

        return arr;
    }
}
