from typing import List


class LengthOfLIS:
    def lengthOfLIS(self, nums: List[int]) -> int:
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
    
