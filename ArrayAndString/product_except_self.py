from typing import List


class ProductExceptSelf:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [1] * n
        for i in range(1, n):
            # Compute the product of all elements to the left of the current index
            ans[i] = ans[i - 1] * nums[i - 1]

        right_prod = 1
        for i in range(n - 1, -1, -1):
            # ans[i] currently holds the product of all elements to the left of index i
            # Multiply it by the product of all elements to the right of index i
            # to get the final product of all elements except nums[i]
            ans[i] *= right_prod
            right_prod *= nums[i]

        return ans


# Time complexity: O(n) where n is the length of the input array, 
# as we traverse the array twice.
# Space complexity: O(1) if we don't count the output array, 
# as we are using only a constant amount of extra space for the left and right products.
