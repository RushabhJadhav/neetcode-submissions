class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newArr = []
        for(let item of nums) {
            if(newArr.includes(item)) {
                return true;
            }
            newArr.push(item)
        }
        return false;
    }
}
