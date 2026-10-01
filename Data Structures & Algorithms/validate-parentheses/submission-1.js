class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        }

        const stack = [];

        for(let i = 0; i < s.length; i++) {
            let top = stack[stack.length - 1];
            if(brackets[top] === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i]);  
            }
        }

        return stack.length == 0;
    }
}
