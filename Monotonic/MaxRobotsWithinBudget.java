/*You have n robots. You are given two 0-indexed integer arrays, chargeTimes and runningCosts, both of length n. 
The ith robot costs chargeTimes[i] units to charge and costs runningCosts[i] units to run. 
You are also given an integer budget.

The total cost of running k chosen robots is equal to max(chargeTimes) + k * sum(runningCosts), 
where max(chargeTimes) is the largest charge cost among the k robots 
and sum(runningCosts) is the sum of running costs among the k robots.

Return the maximum number of consecutive robots you can run 
such that the total cost does not exceed budget. */

import java.util.ArrayDeque;

class MaxRobotsWithinBudget {
    public int maximumRobots(int[] chargeTimes, int[] runningCosts, long budget) {
        int n = chargeTimes.length;
        ArrayDeque<Integer> maxChargeTimesIndices = new ArrayDeque<>();
        long currentRunningCostsSum = 0;
        int maxRobots = 0;
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            while (!maxChargeTimesIndices.isEmpty() && chargeTimes[right] > chargeTimes[maxChargeTimesIndices.peekLast()]) {
                maxChargeTimesIndices.pollLast();
            }

            maxChargeTimesIndices.addLast(right);
            currentRunningCostsSum += runningCosts[right];
            long currentTotalCost = chargeTimes[maxChargeTimesIndices.peekFirst()] + (right - left + 1) * currentRunningCostsSum;

            while (currentTotalCost > budget && right > left) {
                currentRunningCostsSum -= runningCosts[left];
                left++;
                if (!maxChargeTimesIndices.isEmpty() && maxChargeTimesIndices.peekFirst() < left) {
                    maxChargeTimesIndices.pollFirst();
                }

                currentTotalCost = chargeTimes[maxChargeTimesIndices.peekFirst()] + (right - left + 1) * currentRunningCostsSum;
            }

            if (currentTotalCost <= budget) {
                int currentRobotCount = right - left + 1;
                maxRobots = Math.max(maxRobots, currentRobotCount);
            }
        }


        return maxRobots;
    }
}