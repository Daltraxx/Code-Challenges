from heapq import heappop, heappush


class SmallestInfiniteSet:
    def __init__(self):
        self.current_smallest = 1
        self.in_heap = set() # Guard against duplicates in the heap.
        self.added_back = [] # Min-heap to store numbers that have been added back.

    def popSmallest(self) -> int:
        # If there are any numbers in the heap, it contains the smallest number
        if self.added_back:
            smallest = heappop(self.added_back)
            self.in_heap.remove(smallest)
            return smallest
        
        # If heap is empty, use the current smallest number (infinite tail)
        # and increment it for the next call.
        smallest = self.current_smallest
        self.current_smallest += 1
        return smallest

    def addBack(self, num: int) -> None:
        # Only add back numbers that are smaller than the current smallest number 
        # and not already in the heap (preventing duplicates).
        if num < self.current_smallest and num not in self.in_heap:
            heappush(self.added_back, num)
            self.in_heap.add(num)

# Time complexity:
# - popSmallest: O(log m) where m is the number of elements in the heap (added back numbers).
# - addBack: O(log m) for the heap push operation.
