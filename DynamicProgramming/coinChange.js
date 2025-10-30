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

const coins = [2],
  amount = 3;
console.log(coinChangeBacktracking(coins, amount));

// TOP-DOWN
const coinChange = (coins, amount) => {
  const memo = new Array(amount + 1);
  const getMinCoins = (remaining) => {
    if (remaining < 0) return -1;
    if (remaining === 0) return 0;

    if (memo[remaining] !== 0) return memo[remaining];

    let minCoins = Infinity;
    for (let coin of coins) {
      let result = getMinCoins(remaining - coin);
      if (result >= 0 && result < min) {
        minCoins = 1 + result;
      }
    }

    memo[remaining] = min === Infinity ? -1 : minCoins;
    return memo[remaining];
  }

  return getMinCoins(amount);
}