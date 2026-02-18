import java.util.ArrayDeque;
import java.util.Deque;

public class MaximumRobots {
  public int maximumRobots(int[] chargeTimes, int[] runningCosts, long budget) {
    int n = chargeTimes.length;
    long currRunningCostSum = 0;
    int maxRobots = 0;
    Deque<Integer> monoDecreasingCharges = new ArrayDeque<>();

    int left = 0;

    for (int right = 0; right < n; right++) {
      // Update vars for calculating cost
      currRunningCostSum += runningCosts[right];
      while (!monoDecreasingCharges.isEmpty() && chargeTimes[right] >= chargeTimes[monoDecreasingCharges.getLast()]) {
        monoDecreasingCharges.removeLast();
      }
      monoDecreasingCharges.addLast(right);

      // Maintain valid window
      while (!monoDecreasingCharges.isEmpty()
          && getCost(chargeTimes[monoDecreasingCharges.getFirst()], right - left + 1, currRunningCostSum) > budget) {
        currRunningCostSum -= runningCosts[left];
        left++;
        while (!monoDecreasingCharges.isEmpty() && monoDecreasingCharges.getFirst() < left) {
          monoDecreasingCharges.removeFirst();
        }
      }

      // Update max robots
      maxRobots = Math.max(right - left + 1, maxRobots);
    }

    return maxRobots;
  }

  private long getCost(int maxCharge, int robotCount, long runningCostSum) {
    return maxCharge + (robotCount * runningCostSum);
  }
}

// Time complexity: O(n) where n is the length of the input arrays chargeTimes and runningCosts. We iterate through the arrays once and each element is added and removed from the deque at most once.
// Space complexity: O(n) in the worst case where all charge times are in decreasing order, causing all indices to be stored in the deque.
