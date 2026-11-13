class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let largestFreq = new Map()
        let frequent = [];

        for (let i = 0; i < arr.length; i++) {
            let count = largestFreq.get(arr[i]);
            if (largestFreq.has(arr[i])) {
                largestFreq.set(arr[i], count + 1);
            } else {
                largestFreq.set(arr[i], 1);
            }
        }

        for (let [key, value] of largestFreq) {
            if (key === value) frequent.push(value);
        }

        return frequent.sort((a, b) => a - b)[frequent.length - 1] || -1;
    }
}
