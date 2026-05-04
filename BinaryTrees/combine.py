from typing import List


class Combine:
    def combine(self, n: int, k: int):
        def backtrack(curr: List[int], idx: int) -> List[List[int]]:
            if len(curr) == k:
                combinations.append(curr[:])
                return

            for i in range(idx, len(nums)):
                curr.append(nums[i])
                backtrack(curr, i + 1)
                curr.pop()

        nums = [num for num in range(1, n + 1)]
        combinations = []
        backtrack([], 0)
        return combinations
