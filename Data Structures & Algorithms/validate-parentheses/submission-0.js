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
            if(brackets[stack[stack.length - 1]] === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i]);  
            }
        }

        return stack.length == 0;
    }
}
