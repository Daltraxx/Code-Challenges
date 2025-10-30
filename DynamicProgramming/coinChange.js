const coinChange = (coins, amount) => {
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
  }

  return backtrack(0, 0, 0);
}

const coins = [1, 2, 5],
  amount = 11;
console.log(coinChange(coins, amount));