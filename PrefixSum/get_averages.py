from typing import List


class GetAverages:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
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
