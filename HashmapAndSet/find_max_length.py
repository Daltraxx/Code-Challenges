from typing import List


class FindMaxLength:
    def findMaxLength(self, nums: List[int]) -> int:
        # Important: We need to initialize the balance 0 to -1
        # to account for subarrays that start at index 0.
        balances = {0: -1}
        curr_balance = 0
        max_subarray = 0
        for i, num in enumerate(nums):
            curr_balance += 1 if num == 1 else -1
            if curr_balance in balances:
                j = balances[curr_balance]
                max_subarray = max(i - j, max_subarray)
            else:
                balances[curr_balance] = i

        return max_subarray

    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the input array once, performing constant time operations for each element.
    # Space complexity: O(n) in the worst case where all balances are unique.
