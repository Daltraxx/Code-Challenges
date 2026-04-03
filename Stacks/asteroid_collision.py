from typing import List


class AsteroidCollision:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for asteroid in asteroids:
            destroyed = False
            while stack and stack[-1] > 0 and asteroid < 0 and not destroyed:
                left_asteroid = stack[-1]
                right_asteroid = -asteroid
                if left_asteroid > right_asteroid:
                    destroyed = True
                elif left_asteroid == right_asteroid:
                    destroyed = True
                    stack.pop()
                else:
                    stack.pop()
            if not destroyed:
                stack.append(asteroid)
        return stack

    # Time complexity: O(n) where n is the number of asteroids in the input list.
    # In the worst case, we may need to process each asteroid once,
    # and each asteroid can be added and removed from the stack at most once.
    # Space complexity: O(n) in the worst case,
    # if all asteroids are moving in the same direction and none of them collide,
    # we would end up storing all asteroids in the stack.
