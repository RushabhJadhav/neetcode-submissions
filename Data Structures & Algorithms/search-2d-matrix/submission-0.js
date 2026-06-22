class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length;
        let col = matrix[0].length;

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (matrix[i][j] === target)
                    return true;
            }
        }

        return false;
    }
}
