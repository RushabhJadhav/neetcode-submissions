class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        let isomorphic = new Map();
        let reverseMap = new Map();

        if (s.length !== t.length) return false;

        for (let i = 0; i < t.length; i++) {
            let val = isomorphic.get(s[i]);
            let reverseVal = reverseMap.get(t[i]);

            if (isomorphic.has(s[i]) && val != t[i]) return false;
            if (reverseMap.has(t[i]) && reverseVal != s[i]) return false;

            isomorphic.set(s[i], t[i]);
            reverseMap.set(t[i], s[i]);
        }

        return true;
    }
}
