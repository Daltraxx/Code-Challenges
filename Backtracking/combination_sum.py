from typing import List


class CombinationSum:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(curr_combo: List[int], curr_sum: int, start: int):
            if curr_sum == target:
                combinations.append(curr_combo[:])
                return

            for i in range(start, len(candidates)):
                num = candidates[i]
                if curr_sum + num > target:
                    break
                curr_combo.append(num)
                backtrack(curr_combo, curr_sum + num, i)
                curr_combo.pop()

        combinations = []
        candidates.sort()
        backtrack([], 0, 0)
        return combinations

    # Time complexity: O(N^(T/M + 1)) where N is the number of candidates,
    # T is the target,
    # and M is the minimum value in candidates.
    # This is because in the worst case, we can use the smallest candidate T/M times,
    # and for each of those times we have N choices.
    # Space complexity: O(T/M) for the recursion stack and the current combination list,
    # not counting the output list which can grow exponentially in size.
