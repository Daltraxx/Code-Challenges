from collections import defaultdict
from typing import List


class Intersection:
    def intersection(self, nums: List[List[int]]) -> int:
        n = len(nums)
        counts = defaultdict(int)
        for i in range(n):
            for j in range(len(nums[i])):
                num = nums[i][j]
                counts[num] += 1

        ans = []
        for num in counts:
            if counts[num] == n:
                ans.append(num)

        ans.sort()
        return ans