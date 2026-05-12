class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagram = new Map();
        for(let item of strs) {
            let key = item.split("").sort().join("");
            if(anagram.has(key)) {
                anagram.set(key, [...anagram.get(key), item])
            } else {
                anagram.set(key, [item]);   
            }
        }
        return [...anagram.values()];
    }
}
