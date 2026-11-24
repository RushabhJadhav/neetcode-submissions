class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let set = new Set();

        for (let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
                if (nums1[i] === nums2[j]) {
                    set.add(nums2[j]);
                }
            }
        }

        return [...set];
    }
}
