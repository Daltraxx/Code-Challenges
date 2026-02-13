from collections import deque
from typing import Deque


class MovingAverage:
    def __init__(self, size: int):
        self.size = size
        self.queue: Deque[int] = deque()
        self.sum = 0

    def next(self, val: int) -> float:
        self.queue.append(val)
        self.sum += val
        if len(self.queue) > self.size:
            self.sum -= self.queue.popleft()
        return self.sum / len(self.queue)

# Time Complexity: O(1) for each next call, as each element is added and removed at most once.
# Space Complexity: O(n) in the worst case, where n is the size of the moving average window.