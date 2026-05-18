class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();

        for(let item of nums) {
            if(freqMap.has(item)) {
                let count = freqMap.get(item)
                freqMap.set(item, count + 1)
            } else {
                freqMap.set(item, 1)    
            }
        }

        return Array.from(freqMap).sort((a, b) => b[1] - a[1]).splice(0, k).map(item => item[0]);
    }
}
