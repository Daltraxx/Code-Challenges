from typing import List


class CombinationSum3:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        def backtrack(curr: List[int], start_num: int, curr_sum: int):
            if len(curr) == k:
                if curr_sum == n:
                    combinations.append(curr[:])
                return

            for num in range(start_num, 0, -1):
                new_sum = curr_sum + num
                if new_sum > n:
                    continue
                curr.append(num)
                backtrack(curr, num - 1, new_sum)
                curr.pop()

        combinations = []
        start_num = min(n - k + 1, 9)
        backtrack([], start_num, 0)
        return combinations

    # Time complexity: O(k * C(9, k)) where C(9, k) 
    # is the number of combinations of 9 numbers taken k at a time.
    # Space complexity: O(k) for the recursion stack 
    # and O(C(9, k)) for storing the combinations.