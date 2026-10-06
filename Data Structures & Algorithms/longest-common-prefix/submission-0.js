class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ref = strs[0];
        let prefix = "";

        for (let i = 0; i < ref.length; i++) {
            for (let j = 0; j < strs.length; j++) {
                if (strs[j][i] !== ref[i]) {
                    return prefix;
                }
            }
            prefix += ref[i];
        }

        return prefix;
    }
}
