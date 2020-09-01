/*
 * Given an array of numbers that represent stock prices (where each number is the price for a certain day), find 2 days when you should buy and sell your stock for the highest profit
 *
 * Example:
 *   stockBuySell([110, 180, 260, 40, 310, 535, 695])
 *   returns: "buy on day 4, sell on day 7"
 *
 * From @cassidoo's weekly newsletter:
 * https://buttondown.email/cassidoo/archive/9bbcae4c-b24e-4d91-9332-115a9c286041
 *
 */

// Brute force solution - O(n^2) time
function stockBuySell(days) {
  let currMax = 0;
  let buy;
  let sell;

  for (let i = 0; i < days.length - 1; i++) {
    for (let j = i + 1; j < days.length; j++) {
      if (days[i] < days[j]) {
        const diff = days[j] - days[i];
        if (diff > currMax) {
          currMax = diff;
          buy = i;
          sell = j;
        }
      }
    }
  }
  return `buy on day ${buy + 1}, sell on day ${sell + 1}`;
}

// Single-pass O(n) time
function stockBuySell2(days) {
  let maxProfit = 0;
  let min = null;
  let buy;
  let sell;

  for (let i = 0; i < days.length; i++) {
    if (days[i] < min || min === null) {
      min = days[i];
      buy = i;
    } else if (days[i] - min > maxProfit) {
      maxProfit = days[i] - min;
      sell = i;
    }
  }
  return `buy on day ${buy + 1}, sell on day ${sell + 1}`;
}

// Test case
const test1 = stockBuySell2([110, 180, 260, 40, 310, 535, 695]);
