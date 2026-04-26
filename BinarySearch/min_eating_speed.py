from typing import List


class MinEatingSpeed:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def test_eating_speed(speed: int) -> bool:
            total_hours = 0
            for pile in piles:
                total_hours += (pile + speed - 1) // speed
                if total_hours > h:
                    return False
            return True

        left = 1
        right = max(piles)
        while left < right:
            mid = (left + right) // 2
            is_fast_enough = test_eating_speed(mid)
            if is_fast_enough:
                right = mid
            else:
                left = mid + 1

        return left

    # Time complexity: O(n log m), where n is the number of piles 
    # and m is the maximum number of bananas in a pile.
    # The binary search runs in O(log m) time, and for each speed tested, 
    # we iterate through the piles in O(n) time to calculate the total hours needed.
    # Space complexity: O(1)