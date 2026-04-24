from typing import List


class SuccessfulPairs:
    def successfulPairs(
        self, spells: List[int], potions: List[int], success: int
    ) -> List[int]:
        m = len(potions)
        sorted_potions = sorted(potions)
        pairs = []
        for spell in spells:
            target = success / spell
            left = 0
            right = m
            while left < right:
                mid = (left + right) // 2
                mid_el = sorted_potions[mid]
                if mid_el >= target:
                    right = mid
                else:
                    left = mid + 1
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