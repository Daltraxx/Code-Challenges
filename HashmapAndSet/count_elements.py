from typing import List


class CountElements:
    def countElements(self, arr: List[int]) -> int:
        num_set = set(arr)
        count = 0
        for num in arr:
            if num + 1 in num_set:
                count += 1
        return count
    
    # Time complexity: O(n) 
    # where n is the number of elements in the input array.
    # We need to iterate through the input array to create the set, 
    # which takes O(n) time.
    # We also need to iterate through the input array again to count the elements, 
    # which takes O(n) time.
    # Space complexity: O(n) for the set.

    def countElementsOneLiner(self, arr: List[int]) -> int:
        num_set = set(arr)
        return sum(1 for num in arr if num + 1 in num_set)
    
    # Same time and space complexity as the previous method
    
