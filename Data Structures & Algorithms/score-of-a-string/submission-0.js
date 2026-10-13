class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let ascii = s.split("").map(char => char.charCodeAt(0));
        let sum = 0;

        for (let i = 1; i < ascii.length; i++) {
            sum += Math.abs(ascii[i] - ascii[i - 1]);
        }

        return sum;
    }
}
