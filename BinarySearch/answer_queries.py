from typing import List
from bisect import bisect_right

class AnswerQueries:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        n = len(nums)
        sorted_nums = sorted(nums)
        prefix = []
        prev_sum = 0
        for num in sorted_nums:
            new_sum = num + prev_sum
            prefix.append(new_sum)
            prev_sum = new_sum

        answer = []
        for query in queries:
            left = 0
            right = n
            while left < right:
                mid = (left + right) // 2
                if prefix[mid] > query:
                    right = mid
                else:
                    left = mid + 1
            answer.append(left)
        return answer
    
    # Time complexity: O(n log n + n + m log n), 
    # which simplifies to O(n log n + m log n), 
    # where n is the length of nums and m is the length of queries. 
    # The O(n log n) term comes from sorting the nums array, 
    # O(n) comes from creating the prefix sum array, 
    # and O(m log n) comes from performing binary search for each query.
    # Space complexity: O(n) for the sorted array and prefix sum array.

    def answerQueriesBisectRight(self, nums: List[int], queries: List[int]) -> List[int]:
        sorted_nums = sorted(nums)
        prefix = []
        prev_sum = 0
        for num in sorted_nums:
            new_sum = num + prev_sum
            prefix.append(new_sum)
            prev_sum = new_sum

        answer = []
        for query in queries:
            idx = bisect_right(prefix, query)
            answer.append(idx)
        return answer
    
    # Same time and space complexity as the previous method, 
    # but uses the built-in bisect_right function for binary search, 
    # which can be more efficient and cleaner.
