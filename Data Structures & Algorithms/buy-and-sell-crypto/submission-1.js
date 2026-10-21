class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let minPrice = prices[0];
        let maxProfit = 0;

        while (i < prices.length) {
            let price = prices[i] - minPrice;
            minPrice = Math.min(minPrice, prices[i]);
            if (price > maxProfit) {
                maxProfit = price;
            }
            i++
        }

        return maxProfit;
    }
}
