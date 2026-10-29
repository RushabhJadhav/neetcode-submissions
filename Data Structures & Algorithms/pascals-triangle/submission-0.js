class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let arr = [[1]];

        for (let i = 1; i < numRows; i++) {
            let subArr = [];
            let prev = arr[i - 1];
            let temp = [0, ...prev, 0]

            for (let j = 1; j < temp.length; j++) {
                let sum = temp[j - 1] + temp[j];
                subArr.push(sum);
            }

            arr.push(subArr);
        }

        return arr;
    }
}
