from typing import List


class TwoSum:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_map = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i

        return []
    
    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the array once, 
    # and each lookup in the hash map takes O(1) time on average.
    # Space complexity: O(n) in the worst case, 
    # if all elements in the array are unique, 
    # we would store all of them in the hash map.
