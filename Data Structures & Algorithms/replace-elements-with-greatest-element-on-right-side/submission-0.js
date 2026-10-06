class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let current = 0;
        let greatToRight = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            current = arr[i];
            arr[i] = greatToRight;
            if (current > greatToRight) {
                greatToRight = current;
            }
        }
        return arr;
    }
}
