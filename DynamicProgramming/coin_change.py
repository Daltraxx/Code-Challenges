from functools import lru_cache
from typing import List

class coin_change_top_down(object):
  def coinChange(self, coins: List[int], amount: int) -> int:
    @lru_cache(None)
    def get_min_coins(amount):
      if amount == 0: return 0
      if amount < 0: return -1
      min_coins = float('inf')
      for coin in coins:
        prev_amt_min_coins = get_min_coins(amount - coin)
        if prev_amt_min_coins != -1:
          min_coins = min(prev_amt_min_coins + 1, min_coins)
      return min_coins if min_coins < float('inf') else -1
    
    return get_min_coins(amount)

# Time complexity: O(S * n) where S is the amount and n is the number of coin denominations.
# Space complexity: O(S) for the recursion stack and memoization storage.

print(coin_change_top_down().coinChange([1, 2, 5], 11))  # Output: 3

class coin_change_bottom_up(object):
  def coinChange(self, coins: List[int], amount: int) -> int:
    min_coins_per_amount = [float("inf")] * (amount + 1)
    min_coins_per_amount[0] = 0
    for coin in coins:
      for curr_amount in range(coin, amount + 1):
        min_coins_per_amount[curr_amount] = min(min_coins_per_amount[curr_amount], min_coins_per_amount[curr_amount - coin] + 1)

    return min_coins_per_amount[amount] if min_coins_per_amount[amount] != float('inf') else -1
  
# Time complexity: O(S * n) where S is the amount and n is the number of coin denominations.
# Space complexity: O(S) for the min_coins_per_amount array. 

print(coin_change_bottom_up().coinChange([1, 2, 5], 11))  # Output: 3