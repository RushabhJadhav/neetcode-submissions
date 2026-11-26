class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];

        for(let i = 0; i < operations.length; i++) {
            let lastIndex = stack.length - 1;

            if(!isNaN(operations[i])) {
                stack.push(Number(operations[i]));
                continue;
            }

            if(operations[i] == "+") {
                stack.push(stack[lastIndex] + stack[lastIndex - 1]);
                continue;
            }

            if(operations[i] == "C") {
                stack.pop();
                continue;
            }

            if(operations[i] == "D") {
                stack.push(stack[lastIndex] * 2);
            }
        }

        return stack.reduce((acc, curr) => acc += curr, 0);
    }
}
