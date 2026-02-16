from typing import List


class StockSpanner:
    def __init__(self):
        self.mono_decreasing_prices: List[List[int]] = []

    def next(self, price: int) -> int:
        span = 1
        while (
            self.mono_decreasing_prices and price >= self.mono_decreasing_prices[-1][0]
        ):
            prev_span = self.mono_decreasing_prices.pop()[1]
            span += prev_span
        self.mono_decreasing_prices.append([price, span])
        return span


# Time complexity of each call to next: O(1) amortized. If you average the time taken by next over n calls, it will be O(1) because each price is pushed and popped at most once from the stack.
# Space complexity: O(n). In the worst case, if the prices are in strictly decreasing order, all prices will be stored in the stack.
