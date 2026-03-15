from typing import List


class KidsWithCandies:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_amount = 0
        for amount in candies:
            max_amount = max(amount, max_amount)

        ans = []
        for amount in candies:
            ans.append(True if amount + extraCandies >= max_amount else False)

        return ans

# Time complexity: O(n) where n is the number of kids. 
# We iterate through the list of candies twice, but this is still linear time.
# Space complexity: O(n) since we create a new list of booleans to store the results. 
# If we don't count the output, the space complexity is O(1).