from collections import deque
from typing import Deque


class RecentCounter:
    def __init__(self):
        self.queue: Deque[int] = deque()

    def ping(self, t: int) -> int:
        self.queue.append(t)
        while self.queue and self.queue[0] < t - 3000:
            self.queue.popleft()
        return len(self.queue)

# TIme Complexity: O(1) for each ping, as each element is added and removed at most once.
# Space Complexity: O(n) in the worst case, where n is the number of pings in the last 3000 milliseconds.