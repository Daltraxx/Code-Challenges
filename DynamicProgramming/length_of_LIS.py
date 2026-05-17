from typing import List


class LengthOfLIS:
    def lengthOfLISTopDown(self, nums: List[int]) -> int:
        def get_LIS(i: int) -> int:
            if memo[i]:
                return memo[i]
            
            max_subsequence = 1
            for j in range(i):
                if nums[j] < nums[i]:
                    max_subsequence = max(get_LIS(j) + 1, max_subsequence)
            memo[i] = max_subsequence
            return max_subsequence
        
        n = len(nums)
        memo = [0] * n
        return max(get_LIS(i) for i in range(n))
    
    # Time complexity: O(n^2) due to the nested calls in get_LIS.
    # Space complexity: O(n) for the memoization array and the call stack in the
    # worst case of a strictly increasing array.

    def lengthOfLISBottomUp(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [1] * n
        max_subsequence = 1
        for i in range(1, n):
            for j in range(i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[j] + 1, dp[i])
                    max_subsequence = max(dp[i], max_subsequence)
        return max_subsequence
    
    # Time complexity: O(n^2) due to the nested loops.
    # Space complexity: O(n) for the dp array.
