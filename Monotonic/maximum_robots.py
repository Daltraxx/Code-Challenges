from collections import deque
from typing import List


class MaximumRobots:
    def maximum_robots(
        self, charge_times: List[int], running_costs: List[int], budget: int
    ) -> int:
        n = len(charge_times)
        max_robots = 0
        curr_running_cost_sum = 0
        mono_decreasing_charges = deque()

        left = 0
        for right in range(n):
            curr_running_cost_sum += running_costs[right]

            while (
                mono_decreasing_charges
                and charge_times[right] >= charge_times[mono_decreasing_charges[-1]]
            ):
                mono_decreasing_charges.pop()
            mono_decreasing_charges.append(right)

            # Maintain valid window
            while (
                self._get_total_cost(
                    charge_times[mono_decreasing_charges[0]],
                    right - left + 1,
                    curr_running_cost_sum,
                )
                > budget
            ):
                curr_running_cost_sum -= running_costs[left]
                left += 1
                while mono_decreasing_charges and mono_decreasing_charges[0] < left:
                    mono_decreasing_charges.popleft()

            max_robots = max(right - left + 1, max_robots)

        return max_robots

    @staticmethod
    def _get_total_cost(max_charge, robot_count, running_cost_sum):
        return max_charge + (robot_count * running_cost_sum)


chargeTimes = [11, 12, 19]
runningCosts = [10, 8, 7]
budget = 19
print(MaximumRobots().maximum_robots(chargeTimes, runningCosts, budget))
