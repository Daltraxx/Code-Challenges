public class CoinChange {
  int[] coins;
  int[] memo;

  public int coinChange(int[] coins, int amount) {
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
}
