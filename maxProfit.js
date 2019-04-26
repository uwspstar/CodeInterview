/*
Say you have an array 
for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction 
(i.e., buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let number = 0;
    let len = prices.length;
    
    // find the small price index
    let buyPrice = prices[0];
    let buyPriceIndex = 0;
   
    for(let i = 1; i<len; i++){
      let temp = prices[i];
      if(temp < buyPrice){
        buyPrice = temp;
        buyPriceIndex = i;
      }
    }
    //find the max
    let sellPriceIndex = buyPriceIndex;
    let sellPrice = buyPrice;

    for(let j = buyPriceIndex; j<len; j++){
      let temp = prices[j];
      if(temp > sellPrice){
        sellPrice = temp;
        sellPriceIndex = j;
      }
    }
    //console.log('buyPriceIndex = ',buyPriceIndex);
    //console.log('sellPriceIndex =',sellPriceIndex);
    
    if(sellPriceIndex+1 === len) {
      return 0;
    }
    return sellPriceIndex+1;
};

//console.log(maxProfit([7,1,5,3,6,4]));//5
console.log(maxProfit([7,6,4,3,1]));//0
