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
        right = len(arr) - k # We set right to len(arr) - k because no valid windows can start beyond this point.
        while left < right:
            # Look for the best left index using binary search.
            mid = (left + right) // 2
            left_el = arr[mid]
            right_el = arr[mid + k]
            # Compare the distance of the left and right elements from x to decide which side to move towards
            # while biasing towards the left in case of a tie.
            # When x is greater than right_el, we know that the k closest elements must be to the right of mid, so we move up.
            # Using right_el - x instead of an absolute value preserves this directional bias 
            # (by giving a negative value when right_el is less than x), 
            # which is crucial for correctly handling what would otherwise be ties.
            # An absolute value tie could otherwise erroneously take us left 
            # if we used abs(x - left_el) <= abs(x - right_el) when x is greater than right_el.
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
