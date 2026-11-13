class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let distinct = [];
        for (let i = 0; i < arr.length; i++) {
            let isDistinct = true;
            for (let j = 0; j < arr.length; j++) {
                if (i === j) continue;

                if (arr[i] === arr[j]) {
                    isDistinct = false;
                }
            }

            if (isDistinct) {
                distinct.push(arr[i])
            }

        }

        return distinct[k - 1] || "";
    }
}
