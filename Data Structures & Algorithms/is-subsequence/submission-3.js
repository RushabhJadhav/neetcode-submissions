class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let checker = s.split("");

        for (let i = 0; i < t.length; i++) {
            if (checker[0] === t[i]) {
                checker.shift();
            }
        }

        return checker.length === 0;
    }
}
