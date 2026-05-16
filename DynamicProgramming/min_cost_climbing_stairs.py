from typing import List


class MinCostClimbingStairs:
    def minCostClimbingStairsTopDown(self, cost: List[int]) -> int:
        def get_min_cost(i: int) -> int:
            if memo[i] is not None:
                return memo[i]

            if i == 0 or i == 1:
                memo[i] = cost[i]
                return memo[i]

            memo[i] = cost[i] + min(get_min_cost(i - 2), get_min_cost(i - 1))
            return memo[i]

        n = len(cost)
        memo = [None] * n
        return min(get_min_cost(n - 1), get_min_cost(n - 2))
    
    # Time complexity: O(n) where n is the number of steps.
    # Space complexity: O(n) for the recursion stack and the memo array.

    def minCostClimbingStairsBottomUp(self, cost: List[int]) -> int:
        n = len(cost)
        dp = [None] * n
        dp[0] = cost[0]
        dp[1] = cost[1]
        for i in range(2, n):
            dp[i] = cost[i] + min(dp[i - 2], dp[i - 1])

        return min(dp[n - 1], dp[n - 2])
    
    # Time complexity: O(n) where n is the number of steps.
    # Space complexity: O(n) for the dp array.
    
    def minCostClimbingStairsConstantSpace(self, cost: List[int]) -> int:
        n = len(cost)
        two_back = cost[0]
        one_back = cost[1]
        for i in range(2, n):
            curr_cost = cost[i] + min(two_back, one_back)
            two_back = one_back
            one_back = curr_cost
        return min(two_back, one_back)
    
    # Time complexity: O(n) where n is the number of steps.
    # Space complexity: O(1) for the constant space used.
        
