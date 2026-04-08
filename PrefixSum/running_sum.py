from typing import List


class RunningSum:
    def runningSum(self, nums: List[int]) -> List[int]:
        prefix = []
        prefix.append(nums[0])
        for i in range(1, len(nums)):
            prefix.append(nums[i] + prefix[i - 1])
        return prefix
    
    # Time complexity: O(n), where n is the length of the input array. 
    # We iterate through the array once to compute the running sum.
    # Space complexity: O(n), since we use an additional array to store the running sums.

    def runningSumInPlace(self, nums: List[int]) -> List[int]:
        for i in range(1, len(nums)):
            nums[i] += nums[i - 1]
        return nums

    # Time complexity: O(n), where n is the length of the input array.
    # We iterate through the array once to compute the running sum in place.
    # Space complexity: O(1), since we do not use any additional arrays.
