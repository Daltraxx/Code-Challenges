import java.util.Arrays;

public class CoinChange {
  int[] coins;
  int[] memo;

  public int coinChange(int[] coins, int amount) {
    // TOP-DOWN
    this.coins = coins;
    memo = new int[amount + 1];
    return dp(amount);
  }
  
  private int dp(int remaining) {
    if (remaining == 0)
      return 0;
    if (remaining < 0)
      return -1;

    if (memo[remaining] != 0)
      return memo[remaining];

    int minCoinsNeeded = Integer.MAX_VALUE;
    for (int coin : coins) {
      int result = dp(remaining - coin);
      if (result >= 0 && result < minCoinsNeeded)
        minCoinsNeeded = result + 1;
    }

    if (minCoinsNeeded != Integer.MAX_VALUE) {
      memo[remaining] = minCoinsNeeded;
    } else {
      memo[remaining] = -1;
    }

    return memo[remaining];
  }
  
  // BOTTOM-UP
  public int coinChangeBottomUp(int[] coins, int amount) {
    int[] minCoinsNeededForAmount = new int[amount + 1];
    minCoinsNeededForAmount[0] = 0;
    
    for (int remainingAmount = 1; remainingAmount < minCoinsNeededForAmount.length; remainingAmount++) {
      int minCoinsNeeded = Integer.MAX_VALUE;
      for (int coin : coins) {
        int minCoinsNeededForPrevAmount = coin <= remainingAmount
            ? minCoinsNeededForAmount[remainingAmount - coin]
            : -1;
        if (minCoinsNeededForPrevAmount >= 0)
          minCoinsNeeded = Math.min(1 + minCoinsNeededForPrevAmount, minCoinsNeeded);
      }

      minCoinsNeededForAmount[remainingAmount] = minCoinsNeeded < Integer.MAX_VALUE ? minCoinsNeeded : -1;
    }
    
    return minCoinsNeededForAmount[amount];
  }
}
