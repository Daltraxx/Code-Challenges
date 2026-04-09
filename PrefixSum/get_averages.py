from typing import List


class GetAverages:
    def getAveragesPrefixSum(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        avgs = [-1] * n
        prefix = [nums[0]]
        for i in range(1, n):
            prefix.append(nums[i] + prefix[i - 1])

        for i in range(k, n - k):
            left = i - k
            right = i + k
            curr_sum = prefix[right] - (prefix[left - 1] if left > 0 else 0)
            avgs[i] = curr_sum // (k * 2 + 1)

        return avgs
    
    # Time complexity: O(n) where n is the number of elements in the input array. 
    # We compute the prefix sum in O(n) time 
    # and then iterate through the array once to calculate the averages, 
    # which also takes O(n) time.
    # Space complexity: O(n) for the prefix sum array and the output array of averages.

    def getAveragesSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        avgs = [-1] * n
        window_size = k * 2 + 1
        curr_sum = sum(nums[:window_size])
        for i in range(k, n - k):
            avgs[i] = curr_sum // window_size
            # Set up for next iteration
            if i + k + 1 < n:
                curr_sum += nums[i + k + 1]
                curr_sum -= nums[i - k]

        return avgs
    
    # Time complexity: O(n) where n is the number of elements in the input array. 
    # We iterate through the array once to calculate the averages using a sliding window approach.
    # Space complexity: O(n) for the output array of averages.
