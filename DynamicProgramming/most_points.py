from typing import List


class MostPoints:
    def mostPointsTopDown(self, questions: List[List[int]]) -> int:
        def get_most_points(i: int) -> int:
            if i >= n:
                return 0
            if memo[i] != -1:
                return memo[i]

            points, brain_power = questions[i]
            memo[i] = max(
                points + get_most_points(i + brain_power + 1), get_most_points(i + 1)
            )
            return memo[i]

        n = len(questions)
        memo = [-1] * n
        return get_most_points(0)

    # Time complexity: O(n) due to the memoization avoiding redundant calculations.
    # We visit each question at most once.
    # Space complexity: O(n) for the memoization array and the call stack in the
    # worst case of a strictly increasing brain power.

    def mostPointsBottomUp(self, questions: List[List[int]]) -> int:
        n = len(questions)
        dp = [0] * (n + 1) # dp[n] = 0 for out of bounds
        for i in range(n - 1, -1, -1):
            points, brain_power = questions[i]
            next_solvable = i + brain_power + 1
            solve = points + dp[min(next_solvable, n)]
            skip = dp[i + 1]
            dp[i] = max(solve, skip)

        return dp[0]
    
    # Time complexity: O(n) due to the single pass through the questions.
    # Space complexity: O(n) for the dp array.