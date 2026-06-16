class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        let i = 0;
        let j = cleanedStr.length - 1;

        while(i < j) {
            if(cleanedStr[i] !== cleanedStr[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
