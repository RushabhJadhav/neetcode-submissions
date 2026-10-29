class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        let arr = [[1]];

        for (let i = 1; i <= rowIndex; i++) {
            let subArr = [];
            let prev = [...arr[i - 1]];
            let temp = [0, ...prev, 0];

            for (let j = 1; j < temp.length; j++) {
                let sum = temp[j - 1] + temp[j];
                subArr.push(sum);
            }

            arr.push(subArr);
        }

        return arr[rowIndex];
    }
}
