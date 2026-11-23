class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let n = grid.length;
        let count = {};
        let double = 0;
        let missing = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                let item = grid[i][j];

                if (count[item]) {
                    count[item] = count[item] + 1;
                } else {
                    count[item] = 1;
                }
            }
        }

        for (let x = 1; x <= n * n; x++) {
            if (!count[x]) {
                missing = x;
            }

            if (count[x] == 2) {
                double += x;
            }
        }

        return [double, missing];
    }
}
