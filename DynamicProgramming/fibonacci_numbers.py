class FibonacciNumbers:
    def fibonacciNumbersTopDown(self, target: int) -> int:
        def get_fibonacci(num):
            if dp[num] is not None:
                return dp[num]

            dp[num] = get_fibonacci(num - 1) + get_fibonacci(num - 2)
            return dp[num]

        dp = [None] * (target + 1)
        dp[0] = 0
        dp[1] = 1
        return get_fibonacci(target)
    
    def fibonacciNumbersBottomUp(self, target: int) -> int:
        dp = [0] * (target + 1)
        dp[0] = 0
        dp[1] = 1

        for i in range(2, target + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[target]
    
# Time complexity: O(n) where n is the target number, since we compute each Fibonacci number from 2 to n once.
# Space complexity: O(n) for the dp array storing Fibonacci numbers up to the target.

print(FibonacciNumbers().fibonacciNumbersTopDown(10))  # Output: 55
print(FibonacciNumbers().fibonacciNumbersBottomUp(10))  # Output: 55