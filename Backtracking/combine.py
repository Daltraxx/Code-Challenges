from typing import List


class Combine:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def backtrack(curr: List[int], starting_num: int):
            if len(curr) == k:
                combinations.append(curr[:])
                return

            # We prune the search space by calculating the maximum number we can start from,
            # preventing unnecessary recursive calls 
            # when there aren't enough numbers left to complete a valid combination.
            nums_needed = k - len(curr)
            max_num = n - nums_needed + 1

            for num in range(starting_num, max_num + 1):
                curr.append(num)
                backtrack(curr, num + 1)
                curr.pop()

        combinations = []
        backtrack([], 1)
        return combinations

    # Time complexity: O(k * C(n, k)) where k is the size of each combination 
    # and C(n, k) is the binomial coefficient representing the number of combinations. 
    # We take O(k) time to create a copy of each valid combination, 
    # and there are C(n, k) such combinations in the worst case.
    # Space complexity: O(k) for curr and the recursion stack, 
    # not counting the space used for the output list combinations, 
    # which can grow to O(k * C(n, k)) in the worst case.