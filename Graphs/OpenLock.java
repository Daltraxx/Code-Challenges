import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;
import java.util.HashSet;
import java.util.Set;

public class OpenLock {
    public int openLock(String[] deadends, String target) {
        Set<String> seen = new HashSet<>(Arrays.asList(deadends));
        if (seen.contains("0000")) {
            return -1;
        }
        seen.add("0000");

        Deque<CombinationState> queue = new ArrayDeque<>();
        queue.add(new CombinationState("0000", 0));

        while (!queue.isEmpty()) {
            CombinationState comboState = queue.pollFirst();
            String combo = comboState.combination;
            int steps = comboState.steps;

            if (combo.equals(target)) {
                return steps;
            }

            for (int i = 0; i < 4; i++) {
                int digit = combo.charAt(i) - '0';
                for (int change : new int[] { -1, 1 }) {
                    // Java modulo keeps negative values negative, so we add 10 to ensure it stays
                    // positive
                    int newDigit = (digit + change + 10) % 10;
                    char[] newCombo = combo.toCharArray();
                    newCombo[i] = (char) (newDigit + '0');
                    String newComboStr = new String(newCombo);
                    if (!seen.contains(newComboStr)) {
                        seen.add(newComboStr);
                        queue.addLast(new CombinationState(newComboStr, steps + 1));
                    }
                }
            }
        }

        return -1;
    }

    private static class CombinationState {
        String combination;
        int steps;

        public CombinationState(String combination, int steps) {
            this.combination = combination;
            this.steps = steps;
        }
    }
}

// Time Complexity: O(10^4) - In the worst case, we may need to explore all
// possible combinations of the lock (from "0000" to "9999").
// Space Complexity: O(10^4) - We may need to store all possible combinations in
// the seen set and the queue in the worst case.