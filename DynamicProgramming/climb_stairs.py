class ClimbStairs:
    def climbStairsTopDown(self, n: int) -> int:
        def dp(i: int) -> int:
            if i == 1:
                return 1
            if i == 2:
                return 2

            if memo[i] != -1:
                return memo[i]

            memo[i] = dp(i - 1) + dp(i - 2)
            return memo[i]

        memo = [-1] * (n + 1)
        return dp(n)

    # Time complexity: O(n) because each subproblem is solved only once.
    # Space complexity: O(n) for the memoization array and the call stack.

    def climbStairsBottomUp(self, n: int) -> int:
        if n < 3:
            return n
        
        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n + 1):
            dp[i] = dp[i - 2] + dp[i - 1]
        return dp[n]
    
    # Time complexity: O(n) due to the single loop filling the dp array.
    # Space complexity: O(n) for the dp array.

    def climbStairsConstantSpace(self, n: int) -> int:
        if n < 3:
            return n
        
        two_back = 1
        one_back = 2
        for _ in range(3, n + 1):
            curr_ways = two_back + one_back
            two_back = one_back
            one_back = curr_ways

        return one_back

    # Time complexity: O(n) due to the single loop.
    # Space complexity: O(1)
