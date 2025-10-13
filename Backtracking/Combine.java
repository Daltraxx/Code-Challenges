import java.util.ArrayList;
import java.util.List;

public class Combine {
    List<List<Integer>> combinations;
    int n;
    int k;
    public List<List<Integer>> combine(int n, int k) {
        combinations = new ArrayList<>();
        this.n = n;
        this.k = k;
        backtrack(new ArrayList<>(), 1);
        return combinations;
    }

    private void backtrack(List<Integer> curr, int i) {
        if (curr.size() == k) {
            combinations.add(new ArrayList<>(curr));
            return;
        }

        for (int j = i; j <= n; j++) {
            curr.add(j);
            backtrack(curr, j + 1);
            curr.remove(curr.size() - 1);
        }
    }
}