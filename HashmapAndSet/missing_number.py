from typing import List


class MissingNumber:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        num_set = set(nums)
        for i in range(n + 1):
            if i not in num_set:
                return i
        return None  # This line should never be reached per the problem constraints

    # Time complexity: O(n) where n is the length of the input array.
    # We need to iterate through the input array to create the set,
    # which takes O(n) time.
    # We also need to iterate through the numbers from 0 to n to check for the missing number,
    # which takes O(n) time.
    # Space complexity: O(n) for the set.

    def missingNumberGauss(self, nums: List[int]) -> int:
        n = len(nums)
        expected_sum = n * (n + 1) // 2
        actual_sum = sum(nums)
        return expected_sum - actual_sum

    # Time complexity: O(n) where n is the length of the input array.
    # We need to iterate through the input array to calculate the actual sum,
    # which takes O(n) time.
    # Space complexity: O(1)

    def missingNumberXOR(self, nums: List[int]) -> int:
        n = len(nums)
        missing = n  # Start with n, since we will XOR with indices from 0 to n-1
        for i in range(n):
            missing ^= i ^ nums[i]
        return missing
    
    # Time complexity: O(n) where n is the length of the input array.
    # We need to iterate through the input array once, which takes O(n) time.
    # Space complexity: O(1)
