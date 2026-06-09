class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let margins = [];

        let biggestMargin;
        
        for(let i = 0; i < prices.length; i++) {
            for(let j = i + 1; j < prices.length; j++) {
                if(prices[i] !== prices[j]) {
                    let val = prices[j] - prices[i];
                    margins.push(val);
                }
            }
        }

        biggestMargin = margins.sort((a, b) => b - a)[0];

        return biggestMargin > 0 ? biggestMargin : 0;
    }
}
