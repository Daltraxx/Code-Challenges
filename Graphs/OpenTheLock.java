import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*You have a lock in front of you with 4 circular wheels. 
Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. 
The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. 
Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, 
the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, 
return the minimum total number of turns required to open the lock, or -1 if it is impossible. */

class CombinationState {
    String combination;
    int steps;
    public CombinationState(String combination, int steps) {
        this.combination = combination;
        this.steps = steps;
    }
}

public class OpenTheLock {
    Set<String> seen;
    public int openLock(String[] deadends, String target) {
        seen = new HashSet<>();
        for (String deadend : deadends) {
            if (deadend.equals("0000")) {
                return -1;
            }
            seen.add(deadend);
        }
        seen.add("0000");

        Deque<CombinationState> queue = new ArrayDeque<>();
        queue.add(new CombinationState("0000", 0));

        while (!queue.isEmpty()) {
            CombinationState combinationState = queue.remove();
            String combination = combinationState.combination;
            int steps = combinationState.steps;
            if (combination.equals(target)) {
                return steps;
            }

            steps++;

            for (String neighborCombination : getNeighborCombinations(combination)) {
                if (!seen.contains(neighborCombination)) {
                    seen.add(neighborCombination);
                    queue.add(new CombinationState(neighborCombination, steps));
                }
            }
        }

        return -1;
    }

    public List<String> getNeighborCombinations(String combination) {
        List<String> neighbors = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            int digit = (combination.charAt(i) - '0');
            for (int change : new int[] {1, -1}) {
                int newDigit = (10 + digit + change) % 10;
                String neighborCombination = combination.substring(0, i) + newDigit + combination.substring(i + 1);
                neighbors.add(neighborCombination);
            }
        }

        return neighbors;
    }
}
