from math import ceil
from typing import List


class MinSpeedOnTime:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        def is_fast_enough(speed: int):
            total_time = 0
            for i, d in enumerate(dist):
                total_time += (d + speed - 1) // speed if i < n - 1 else d / speed
                if total_time > hour:
                    return False
            return True

        n = len(dist)
        if n > ceil(hour):
            return -1
        left = 1
        right = 10000000
        while left <= right:
            mid = (right + left) // 2
            if is_fast_enough(mid):
                right = mid - 1
            else:
                left = mid + 1

        return left

    # Time complexity: O(n * log(m)) where n is the number of distances 
    # and m is the maximum speed (10^7 in this case).
    # The log(m) factor comes from the binary search on the speed values, 
    # and the O(n) factor comes from the time calculation for each speed value.
    # Space complexity: O(1)