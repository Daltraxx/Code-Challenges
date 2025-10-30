const coinChangeBacktracking = (coins, amount) => {
  if (amount === 0) return 0;
  coins.sort((a, b) => b - a);
  const backtrack = (i, sum, coinCount) => {
    if (sum === amount) {
      return coinCount;
    }
    for (i; i < coins.length; i++) {
      if (sum + coins[i] <= amount) {
        let result = backtrack(i, sum + coins[i], coinCount + 1);
        if (result !== -1) return result;
      }
    }

    return -1;
  };

  return backtrack(0, 0, 0);
};

const coins = [1, 2, 5],
  amount = 11;
console.log(coinChangeBacktracking(coins, amount));

// TOP-DOWN
// Recurrence relation: dp(amount) = 1 + min(amount - coin)
// where we try all possible coins and pick the best option
const coinChange = (coins, amount) => {
  const memo = new Array(amount + 1).fill(0);
  const getMinCoins = (remaining) => {
    if (remaining < 0) return -1;
    if (remaining === 0) return 0;

    if (memo[remaining] !== 0) return memo[remaining];

    let minCoins = Infinity;
    for (let coin of coins) {
      let result = getMinCoins(remaining - coin);
      if (result >= 0 && result < minCoins) {
        minCoins = 1 + result;
      }
    }

    memo[remaining] = minCoins === Infinity ? -1 : minCoins;
    return memo[remaining];
  }

  return getMinCoins(amount);
}

console.log(coinChange(coins, amount));