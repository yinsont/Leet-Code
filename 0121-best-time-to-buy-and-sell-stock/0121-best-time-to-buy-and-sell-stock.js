/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let buy = 0;
    let sell = 1;

    while (sell < prices.length){
        if (prices[sell] > prices[buy]){
            profit = prices[sell]-prices[buy]
            if (profit > maxProfit) maxProfit = profit
        } else {
            buy = sell
        }
        sell += 1
    }
    return maxProfit
};