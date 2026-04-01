from typing import List


class AsteroidsDestroyed:
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        asteroids.sort()
        planet = mass
        for asteroid in asteroids:
            if asteroid > planet:
                return False
            planet += asteroid

        return True

    # Time complexity: O(n log n) due to the sorting step, where n is the number of asteroids.
    # Space complexity: O(1) if we ignore the space used by the sorting algorithm,
    # otherwise O(n) due to the space used by the sorting algorithm.
