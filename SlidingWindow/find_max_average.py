from typing import List


class FindMaxAverage:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        curr_sum = 0
        max_sum = float("-inf")
        left = 0
        for right in range(len(nums)):
            curr_sum += nums[right]
            if right - left + 1 > k:
                curr_sum -= nums[left]
                left += 1
            if right - left + 1 == k:
              max_sum = max(curr_sum, max_sum)

        return max_sum / k

    # Time complexity: O(n) where n is the length of the input list nums, 
    # as we need to traverse the list once to calculate the sum 
    # of each subarray of size k and update the maximum average.
    # Space complexity: O(1)

    def findMaxAverageRefactored(self, nums: List[int], k: int) -> float:
        curr_sum = sum(nums[:k])
        max_sum = curr_sum
        for right in range(k, len(nums)):
            curr_sum += nums[right] - nums[right - k]
            max_sum = max(curr_sum, max_sum)

        return max_sum / k
    
    # Same time and space complexity as the first method, 
    # but with a more concise implementation.