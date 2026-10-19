class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let arr = [];
        let i = 0;
        let j = numbers.length - 1;
        let sum = 0;

        while (i < j) {
            sum = numbers[i] + numbers[j];

            if (sum === target) {
                arr.push(i + 1);
                arr.push(j + 1);
                break;
            } else if (sum > target) {
                j--;
            } else {
                i++;
            }
        }

        return arr;
    }
}
