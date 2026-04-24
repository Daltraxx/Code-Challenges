from bisect import bisect_left
from typing import List


class SuccessfulPairs:
    def successfulPairs(
        self, spells: List[int], potions: List[int], success: int
    ) -> List[int]:
        m = len(potions)
        sorted_potions = sorted(potions)
        pairs = []
        for spell in spells:
            # The formula (success + spell - 1) // spell
            # is a common way to perform ceiling division for positive integers.
            target = (success + spell - 1) // spell
            left = 0
            right = m
            while left < right:
                mid = (left + right) // 2
                mid_el = sorted_potions[mid]
                if mid_el >= target:
                    right = mid
                else:
                    left = mid + 1
            # After the binary search, 
            # left will be the index of the first potion 
            # that is greater than or equal to the target.
            pairs.append(m - left)

        return pairs

    # Time complexity: O((m + n) log m) where m is the number of elements in the potions array
    # and n is the number of elements in the spells array.
    # This is because we first sort the potions array,
    # which takes O(m log m) time,
    # and then for each spell, we perform a binary search on the sorted potions array,
    # which takes O(log m) time.
    # Since we do this for n spells,
    # the total time complexity is O((m + n) log m).
    # Space complexity: O(m) due to the space used to store the sorted potions array.

    def successfulPairsBisect(
        self, spells: List[int], potions: List[int], success: int
    ) -> List[int]:
        m = len(potions)
        sorted_potions = sorted(potions)
        pairs = []
        for spell in spells:
            target = (success + spell - 1) // spell
            idx = bisect_left(sorted_potions, target)
            pairs.append(m - idx)

        return pairs
    
    # Same time and space complexity as the previous method, 
    # but uses the built-in bisect_left function for binary search, 
    # which can be more concise and potentially optimized.
