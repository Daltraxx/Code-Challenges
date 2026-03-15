from typing import List


class KidsWithCandies:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_amount = max(candies)
        return [candy + extraCandies >= max_amount for candy in candies]

# Time complexity: O(n) where n is the number of kids. 
# We iterate through the list of candies twice, but this is still linear time.
# Space complexity: O(n) since we create a new list of booleans to store the results. 
# If we don't count the output, the space complexity is O(1).