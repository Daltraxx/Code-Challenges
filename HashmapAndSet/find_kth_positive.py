from typing import List


class FindKthPositive:

    def find_kth_positive(self, arr: List[int], k: int):
        curr_num = 1
        missing_nums = 0
        for included_num in arr:
            if included_num != curr_num:
                gap = included_num - curr_num
                missing_nums += gap
                if missing_nums >= k:
                    # kth missing number = included_num - (missing_nums - k) - 1, which simplifies to included_num + k - missing_nums - 1
                    return included_num + k - missing_nums - 1
            curr_num = included_num + 1

        return arr[-1] + k - missing_nums
    
    # Time complexity: O(n) where n is the length of the input array arr. We iterate through the array once.
    # Space complexity: O(1) since we are using only a constant amount of extra space


arr = [1, 4, 6]
k = 3
print(
    FindKthPositive().find_kth_positive(arr, k)
)  # returns 5, the missing numbers are [2, 3, 5], the 3rd missing number is 5.
