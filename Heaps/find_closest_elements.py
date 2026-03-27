from heapq import heappop_max, heappush_max
from typing import List


class FindClosestElements:
    def findClosestElementsHeap(self, arr: List[int], k: int, x: int) -> List[int]:
        max_heap = []
        for num in arr:
            diff = abs(x - num)
            heappush_max(max_heap, (diff, num))
            if len(max_heap) > k:
                heappop_max(max_heap)

        k_closest = [num for diff, num in max_heap]
        k_closest.sort()
        return k_closest

    # Time complexity: O(n log k) where n is the number of elements in arr
    # and k is the number of closest elements to return.
    # We iterate through all n elements in arr, and for each element,
    # we perform a heap operation that takes O(log k) time.
    # After processing all elements, we sort the k closest elements,
    # which takes O(k log k) time.
    # Space complexity: O(k) for the max heap that stores the k closest elements.

    def findClosestElementsTwoPointers(
        self, arr: List[int], k: int, x: int
    ) -> List[int]:
        left = 0
        right = len(arr) - 1
        while right - left >= k:
            left_el = arr[left]
            right_el = arr[right]
            if x - left_el <= right_el - x:
                right -= 1
            else:
                left += 1

        return arr[left : right + 1]

    # Time complexity: O(n) where n is the number of elements in arr.
    # Space complexity: O(1) as we are using only a constant amount of extra space for the pointers,
    # and we are returning a slice of the input array without using additional data structures.

    def findClosestElementsBinarySearch(
        self, arr: List[int], k: int, x: int
    ) -> List[int]:
        left = 0
        right = len(arr) - k
        while left < right:
            mid = (left + right) // 2
            left_el = arr[mid]
            right_el = arr[mid + k]
            if x - left_el <= right_el - x:
                right = mid
            else:
                left = mid + 1

        return arr[left : left + k]

    # Time complexity: O(log(n - k)) where n is the number of elements in arr.
    # We perform a binary search on the range of possible starting indices for the k closest elements, 
    # which has a size of n - k.
    # Space complexity: O(1) as we are using only a constant amount of extra space for the pointers, 
    # and we are returning a slice of the input array without using additional data structures.
