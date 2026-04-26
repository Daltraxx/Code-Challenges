from typing import List


class MinEatingSpeed:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def test_eating_speed(speed: int) -> bool:
            hours_remaining = h
            for pile in piles:
                hours_to_eat = (pile + speed - 1) // speed
                hours_remaining -= hours_to_eat
                if hours_remaining < 0:
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



