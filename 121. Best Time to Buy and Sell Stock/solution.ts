function maxProfit(prices: number[]): number {
    let maxDiff = 0,
        left = 0,
        right = 1;

    do {
        if (prices[left] < prices[right]) {
            maxDiff =
                maxDiff > prices[right] - prices[left]
                    ? maxDiff
                    : prices[right] - prices[left];
        } else {
            left = right;
        }
        right++;
    } while (right < prices.length);

    return maxDiff;
}
