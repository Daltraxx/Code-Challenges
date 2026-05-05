import java.util.ArrayList;
import java.util.List;

public class Combine {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> combinations = new ArrayList<>();
        backtrack(new ArrayList<>(), 1, combinations, n, k);
        return combinations;
    }

    private void backtrack(List<Integer> curr, int start, List<List<Integer>> combinations, int n, int k) {
        if (curr.size() == k) {
            combinations.add(new ArrayList<>(curr));
            return;
        }

        // Pruning to avoid unnecessary iterations where it's impossible to fill the
        // remaining slots in curr with the remaining numbers.
        int numsNeeded = k - curr.size();
        int maxNum = n - numsNeeded + 1;

        for (int num = start; num <= maxNum; num++) {
            curr.add(num);
            backtrack(curr, num + 1, combinations, n, k);
            curr.remove(curr.size() - 1);
        }
    }
}

// Time complexity: O(k * C(n, k)) where k is the size of each combination
// and C(n, k) is the binomial coefficient representing the number of
// combinations.
// We take O(k) time to create a copy of each valid combination,
// and there are C(n, k) such combinations in the worst case.
// Space complexity: O(k) for curr and the recursion stack,
// not counting the space used for the output list combinations,
// which can grow to O(k * C(n, k)) in the worst case.