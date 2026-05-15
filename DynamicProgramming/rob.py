from typing import List


class Rob:
    def robTopDown(self, nums: List[int]) -> int:
        def get_most_money(i: int) -> int:
            money = nums[i]
            if i == 0:
                return money
            if dp[i] is not None:
                return dp[i]
            if i == 1:
                dp[i] = max(nums[0], nums[1])
                return dp[i]

            most_money = max(money + get_most_money(i - 2), get_most_money(i - 1))
            dp[i] = most_money
            return most_money

        n = len(nums)
        dp = [None] * n
        return get_most_money(n - 1)

    # Time complexity: O(n) where n is the number of houses.
    # Space complexity: O(n) for the recursion stack and the dp array.

    def robBottomUp(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]

        dp = [-1] * n
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range(2, n):
            money = nums[i]
            dp[i] = max(money + dp[i - 2], dp[i - 1])

        return dp[n - 1]

    # Time complexity: O(n) where n is the number of houses.
    # Space complexity: O(n) for the dp array.

    def robConstantSpace(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if n == 2:
            return max(nums[0], nums[1])
        
        two_back = nums[0]
        one_back = max(two_back, nums[1])
        max_money = 0
        for i in range(2, n):
            money = nums[i]
            max_money = max(money + two_back, one_back)
            two_back = one_back
            one_back = max_money

        return max_money
