from typing import List


class FindKthPositive:

    def find_kth_positive(self, arr: List[int], k: int) -> int:
        curr_num = 1
        missing_nums = 0
        for included_num in arr:
            if included_num != curr_num:
                gap = included_num - curr_num
                if missing_nums + gap >= k:
                    # - 1 to account for curr_num being the first missing number
                    return curr_num + k - missing_nums - 1
                missing_nums += gap
            curr_num = included_num + 1

        return arr[-1] + k - missing_nums

    # Time complexity: O(n) where n is the length of the input array arr. We iterate through the array once.
    # Space complexity: O(1) since we are using only a constant amount of extra space

    def find_kth_positive_binary_search(self, arr: List[int], k: int) -> int:
        left = 0
        right = len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            missing_nums_at_mid = arr[mid] - mid - 1
            if missing_nums_at_mid < k:
                left = mid + 1
            else:
                right = mid - 1

        return left + k

    # Time complexity: O(log n) where n is the length of the input array arr. We are performing a binary search.
    # Space complexity: O(1) since we are using only a constant amount of extra space


arr = [1, 2, 4, 5, 6, 7]
k = 16
print(
    FindKthPositive().find_kth_positive_binary_search(arr, k)
)  # returns 22, the missing numbers are [3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], the 16th missing number is 22.
