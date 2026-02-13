from typing import List


class DailyTemperatures:
    def daily_temperatures(self, temperatures: List[int]) -> List[int]:
        daysToWarmerTemp = [0] * len(temperatures)
        monoDecreasingStack = []

        for i in range(len(temperatures)):
            while monoDecreasingStack and temperatures[i] > temperatures[monoDecreasingStack[-1]]:
                colderDay = monoDecreasingStack.pop()
                daysToWarmerTemp[colderDay] = i - colderDay
            monoDecreasingStack.append(i)

        return daysToWarmerTemp

# Time Complexity: O(n) where n is the number of temperatures, as each temperature is processed at most twice (once when added to the stack and once when removed).
# Space Complexity: O(n) in the worst case, if the temperatures are in decreasing order, as all temperatures would be added to the stack.