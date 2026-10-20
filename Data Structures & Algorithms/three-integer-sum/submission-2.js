class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let triplets = new Map();
        let sortedNums = nums.sort((a, b) => a - b);
        let i = 0;

        while (i < sortedNums.length - 2) {
            let j = i + 1;
            let k = sortedNums.length - 1;
            let sum = 0;

            while (j < k) {
                sum = sortedNums[j] + sortedNums[k];
                let twoSum = -sortedNums[i];

                if (twoSum === sum) {
                    let arr = [sortedNums[i], sortedNums[j], sortedNums[k]];
                    let string = JSON.stringify(arr.sort((a, b) => a - b));
                    if (!triplets.has(string)) {
                        triplets.set(string, arr);
                    }

                    j++;
                    k--;
                } else if (sum < twoSum) {
                    j++;
                } else {
                    k--;
                }
            }
            i++
        }

        return [...triplets.values()];
    }
}
