from typing import List


class GetAverages:
    def getAveragesPrefixSum(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        avgs = [-1] * n
        prefix = [nums[0]]
        for i in range(1, n):
            prefix.append(nums[i] + prefix[i - 1])

        left_sum = 0
        for i in range(k, n - k):
            curr_sum = prefix[i + k] - left_sum
            avgs[i] = curr_sum // (k * 2 + 1)
            left_sum = prefix[i - k]

        return avgs

    def getAveragesSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        avgs = [-1] * n
        window_size = k * 2 + 1
        curr_sum = sum(nums[: k * 2])
        left = 0
        for right in range(k * 2, n):
            curr_sum += nums[right]
            avgs[right - k] = curr_sum // window_size
            # Set up for next iteration
            curr_sum -= nums[left]
            left += 1

        return avgs
