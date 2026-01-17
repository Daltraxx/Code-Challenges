// TOP-DOWN
// Recurrence relation: dp(amount) = 1 + min(amount - coin)
// where we try all possible coins and pick the best option
const coinChange = (coins, amount) => {
  const memo = new Array(amount + 1).fill(0);
  const getMinCoinsNeeded = (remaining) => {
    if (remaining < 0) return -1;
    if (remaining === 0) return 0;

    if (memo[remaining] !== 0) return memo[remaining];

    let minCoinsNeeded = Infinity;
    for (let coin of coins) {
      let result = getMinCoinsNeeded(remaining - coin);
      if (result >= 0 && result < minCoinsNeeded) {
        minCoinsNeeded = 1 + result;
      }
    }

    memo[remaining] = minCoinsNeeded === Infinity ? -1 : minCoinsNeeded;
    return memo[remaining];
  };

  return getMinCoinsNeeded(amount);
};

// Time: O(S * n) where S is the amount and n is the number of coins
// Space: O(S) for the memoization array and the recursion stack

console.log(coinChange(coins, amount));

// BOTTOM-UP
const coinChangeBottomUp = (coins, amount) => {
  const minCoinsNeededForAmount = new Array(amount + 1);
  minCoinsNeededForAmount[0] = 0;
  for (
    let amountRemaining = 1;
    amountRemaining < minCoinsNeededForAmount.length;
    amountRemaining++
  ) {
    let minCoinsNeeded = Infinity;
    for (let coin of coins) {
      const prevMinCoinsNeededForAmount =
        amountRemaining - coin >= 0
          ? minCoinsNeededForAmount[amountRemaining - coin]
          : -1;
      if (prevMinCoinsNeededForAmount >= 0)
        minCoinsNeeded = Math.min(
          prevMinCoinsNeededForAmount + 1,
          minCoinsNeeded
        );
    }

    minCoinsNeededForAmount[amountRemaining] =
      minCoinsNeeded < Infinity ? minCoinsNeeded : -1;
  }

  return minCoinsNeededForAmount[amount];
};

// Time: O(S * n) where S is the amount and n is the number of coins
// Space: O(S) for the dp array
