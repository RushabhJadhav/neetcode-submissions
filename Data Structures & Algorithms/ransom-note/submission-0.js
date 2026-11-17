class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let map = new Map();

        for (let m of magazine) {
            if (map.has(m)) {
                let count = map.get(m);
                map.set(m, count + 1);
            } else {
                map.set(m, 1)
            }
        }

        for (let r of ransomNote) {
            let count = map.get(r);
            if (map.has(r) && count > 0) {
                map.set(r, count - 1)
            } else {
                return false;
            }
        }

        return true;
    }
}
