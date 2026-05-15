class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        let reversedStr = cleanedStr.split("").reverse().join("");

        return cleanedStr === reversedStr;
    }
}