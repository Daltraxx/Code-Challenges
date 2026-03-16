from typing import List


class CanPlaceFlowers:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True
        m = len(flowerbed)
        count = 0
        for i in range(m):
            if flowerbed[i] == 0:
                left = i == 0 or flowerbed[i - 1] == 0
                right = i == m - 1 or flowerbed[i + 1] == 0
                if left and right:
                    flowerbed[i] = 1
                    count += 1
                    if count == n:
                        return True

        return False

# Time Complexity: O(m) where m is the length of the flowerbed array.
# We iterate through the flowerbed once to check for available spots and place flowers.
# Space Complexity: O(1) since we modify the input array in place.