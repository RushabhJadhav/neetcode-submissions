class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let arr = s.split(" ").filter(item => item != "");

        return arr[arr.length - 1].length;
    }
}
