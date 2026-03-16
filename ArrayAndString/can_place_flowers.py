from typing import List


class CanPlaceFlowers:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True
        m = len(flowerbed)
        new_flowerbed = flowerbed.copy()
        count = 0
        for i in range(m):
            if new_flowerbed[i] == 0:
                left = i == 0 or new_flowerbed[i - 1] == 0
                right = i == m - 1 or new_flowerbed[i + 1] == 0
                if left and right:
                    new_flowerbed[i] = 1
                    count += 1
                    if count == n:
                        return True

        return False

# Time Complexity: O(m) where m is the length of the flowerbed array.
# We iterate through the flowerbed once to check for available spots and place flowers.
# Space Complexity: O(m) for the new_flowerbed array, which is a copy of the input flowerbed.