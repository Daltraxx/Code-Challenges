from heapq import heappop, heappop_max, heappush, heappush_max


class MedianFinder:
    def __init__(self):
        self.min_heap = []
        # Max heap will store median when we have odd count of ints
        self.max_heap = []

    def addNum(self, num: int) -> None:
        # Max heap will store the smaller elements
        # Min heap will store the larger elements
        heappush_max(self.max_heap, num)
        heappush(self.min_heap, heappop_max(self.max_heap))
        if len(self.min_heap) > len(self.max_heap):
            heappush_max(self.max_heap, heappop(self.min_heap))

    # Time complexity: O(log n)

    def findMedian(self) -> float:
        if len(self.max_heap) > len(self.min_heap):
            return self.max_heap[0]
        return (self.max_heap[0] + self.min_heap[0]) / 2

    # Time complexity: O(1)
