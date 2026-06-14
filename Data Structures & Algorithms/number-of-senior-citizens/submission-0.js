class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let arr = [];

        for(let item of details) {  
            let age = item.split("").splice(11, 2).join("");
            arr.push(age)
        }

        return arr.filter(item => item > 60).length;
    }
}
