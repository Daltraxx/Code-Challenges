from collections import defaultdict
from heapq import heappop, heappush
from typing import List


class MaximumSum:
    @staticmethod
    def getDigitSum(num: int) -> int:
        digit_sum = 0
        while num > 0:
            digit_sum += num % 10
            num //= 10
        return digit_sum
    
    def maximumSumHeaps(self, nums: List[int]) -> int:
        digit_sum_map = defaultdict(list)
        for num in nums:
            digit_sum = MaximumSum.getDigitSum(num)
            prev_nums = digit_sum_map[digit_sum]
            heappush(prev_nums, num)
            if len(prev_nums) > 2:
                heappop(prev_nums)

        max_pair_sum = -1
        for heap in digit_sum_map.values():
            if len(heap) == 2:
                max_pair_sum = max(sum(heap), max_pair_sum)

        return max_pair_sum
    
    # Time complexity: O(n * m) where n is the number of elements in the input array 
    # and m is the number of digits in the largest number.
    # We iterate through the input array once, and for each number, 
    # we calculate the digit sum which takes O(m) time. 
    # Additionally, we perform heap operations which take O(log k) time 
    # where k is the size of the heap (in this case, k = 2).
    # Space complexity: O(n) in the worst case where all numbers have unique digit sums 
    # and we store them in the heaps.

    def maximumSumNoHeaps(self, nums: List[int]) -> int:
        # -1 is safe due to the constraint that nums[i] >= 1
        digit_sum_map = defaultdict(lambda: [-1, -1])

        for num in nums:
            digit_sum = MaximumSum.getDigitSum(num)
            max1, max2 = digit_sum_map[digit_sum]
            if num > max1:
                digit_sum_map[digit_sum] = [num, max1]
            elif num > max2:
                digit_sum_map[digit_sum][1] = num

        max_pair_sum = -1
        for max1, max2 in digit_sum_map.values():
            if max2 != -1:
                max_pair_sum = max(max_pair_sum, max1 + max2)

        return max_pair_sum
    
    # Time complexity: O(n * m) where n is the number of elements in the input array 
    # and m is the number of digits in the largest number.
    # We iterate through the input array once, 
    # and for each number, we calculate the digit sum which takes O(m) time.
    # Space complexity: O(n) in the worst case where all numbers have unique digit sums.
