from typing import List


class Subsets:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        def backtrack(curr_subset: List[int], idx: int):
            all_subsets.append(curr_subset[:])
            for i in range(idx, len(nums)):
                curr_subset.append(nums[i])
                backtrack(curr_subset, i + 1)
                curr_subset.pop()

        all_subsets = []
        backtrack([], 0)
        return all_subsets

# Time complexity: O(n * 2^n) because there are 2^n subsets 
# (each element can be either included or excluded) 
# and we take O(n) time to create a copy of each subset.
# Space complexity: O(n) for curr_subset and the recursion stack,
# not counting the space used for the output list all_subsets, 
# which can grow to O(n * 2^n) in the worst case.