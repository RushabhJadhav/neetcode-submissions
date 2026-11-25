class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let maxLen = Math.max(word1.length, word2.length);
        let mergedString = "";
        let i = 0;

        while (i < maxLen) {
            if (i < word1.length) {
                mergedString += word1[i];
            }

            if (i < word2.length) {
                mergedString += word2[i];
            }

            i++;
        }

        return mergedString;
    }
}
