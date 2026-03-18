import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class MaximumDetonation {
    private int n;
    private List<List<Integer>> graph;
    private int[][] bombs;

    public int maximumDetonation(int[][] bombs) {
        this.bombs = bombs;
        this.n = bombs.length;

        graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int bomb1 = 0; bomb1 < n; bomb1++) {
            for (int bomb2 = bomb1 + 1; bomb2 < n; bomb2++) {
                setEdges(bomb1, bomb2);
            }
        }

        int maxDetonations = 0;

        for (int bomb = 0; bomb < n; bomb++) {
            maxDetonations = Math.max(dfs(bomb), maxDetonations);
        }

        return maxDetonations;
    }

    private void setEdges(int bomb1, int bomb2) {
        int[] bomb1Data = bombs[bomb1], bomb2Data = bombs[bomb2];

        int x1 = bomb1Data[0], y1 = bomb1Data[1], r1 = bomb1Data[2];
        int x2 = bomb2Data[0], y2 = bomb2Data[1], r2 = bomb2Data[2];

        long dx = (long) x2 - x1;
        long dy = (long) y2 - y1;
        long distanceSquared = dx * dx + dy * dy;

        long r1Squared = (long) r1 * r1;
        long r2Squared = (long) r2 * r2;

        if (r1Squared >= distanceSquared)
            graph.get(bomb1).add(bomb2);
        if (r2Squared >= distanceSquared)
            graph.get(bomb2).add(bomb1);
    }

    private int dfs(int bomb) {
        boolean[] seen = new boolean[n];
        seen[bomb] = true;

        Deque<Integer> stack = new ArrayDeque<>();
        stack.addLast(bomb);

        int detonations = 1;

        while (!stack.isEmpty()) {
            int currentBomb = stack.pollLast();

            for (int neighbor : graph.get(currentBomb)) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    detonations++;
                    stack.addLast(neighbor);
                }
            }
        }

        return detonations;
    }
}

// Time Complexity: O(n^3) - We check each pair of bombs to build the graph,
// and in the worst case, we may visit all bombs for each bomb during DFS.
// Space Complexity: O(n^2) - The graph can have up to n^2 edges in the worst
// case,
// and we also use O(n) space for the seen array during DFS.