from typing import List


class ProductExceptSelf:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [1]
        left_prod = 1
        for i in range(1, n):
            left_prod = ans[i - 1] * nums[i - 1]
            ans.append(left_prod)

        right_prod = 1
        for i in range(n - 1, -1, -1):
            ans[i] = ans[i] * right_prod
            right_prod *= nums[i]

        return ans


# Time complexity: O(n) where n is the length of the input array, 
# as we traverse the array twice.
# Space complexity: O(1) if we don't count the output array, 
# as we are using only a constant amount of extra space for the left and right products.
