import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class CombinationState {
    String combination;
    int steps;
    public CombinationState(String combination, int steps) {
        this.combination = combination;
        this.steps = steps;
    }
}

public class OpenLock {
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
