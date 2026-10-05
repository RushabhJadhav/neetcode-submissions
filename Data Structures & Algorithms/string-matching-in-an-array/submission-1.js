class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const subString = []
    
        for(let i = 0; i < words.length; i++) {
            for(let j = 0; j < words.length; j++) {
                let isSubstring = words[i] !== words[j] && words[i].includes(words[j]);
                if(isSubstring) {
                    subString.push(words[j]);
                }
            }
        }

        return Array.from(new Set(subString));
    }
}
