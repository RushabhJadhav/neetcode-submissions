class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let arr = [];

        for (let i = 0; i < nums2.length; i++) {
            let nextGreater = -1;

            for(let j = i + 1; j < nums2.length; j++) {
                if(nums2[j] > nums2[i]) {
                    nextGreater = nums2[j];
                    break;
                }
            }

            arr[i] = nextGreater;
        }

        for (let j = 0; j < nums1.length; j++) {
            let index = nums2.indexOf(nums1[j]);

            nums1[j] = arr[index];
        }

        return nums1;
    }
}
