from typing import List


class CanPlaceFlowers:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        m = len(flowerbed)
        new_flowerbed = flowerbed.copy()
        count = 0
        for i in range(m):
            if i == 0:
                if new_flowerbed[i] == 0 and new_flowerbed[i + 1] == 0:
                    count += 1
                    new_flowerbed[i] = 1
            elif i == m - 1:
                if new_flowerbed[i - 1] == 0 and new_flowerbed[i] == 0:
                    count += 1
            else:
                if new_flowerbed[i - 1] == 0 and new_flowerbed[i] and new_flowerbed[i + 1] == 0:
                    count += 1
                    new_flowerbed[i] = 1

        return count >= n
