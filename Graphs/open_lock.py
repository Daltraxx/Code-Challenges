from collections import deque
from typing import List


class OpenLock:
    def openLock(self, deadends: List[str], target: str) -> int:
        seen = set(deadends)
        if "0000" in seen:
            return -1
        seen.add("0000")
        queue = deque(["0000"])
        steps = 0
        while queue:
            for _ in range(len(queue)):
                combo = queue.popleft()
                if combo == target:
                    return steps

                combo_list = list(combo)
                for i in range(4):
                    digit = int(combo_list[i])
                    for change in [-1, 1]:
                        new_digit = digit + change
                        if new_digit == -1:
                            new_digit = 9
                        if new_digit == 10:
                            new_digit = 0
                        new_combo = combo_list.copy()
                        new_combo[i] = str(new_digit)
                        new_combo = "".join(new_combo)
                        if new_combo not in seen:
                            seen.add(new_combo)
                            queue.append(new_combo)

            steps += 1

        return -1


# Time complexity: O(10^4) since there are 10,000 possible combinations of the lock.
# Space complexity: O(10^4) since we may have to store all combinations in the seen set and the queue.
