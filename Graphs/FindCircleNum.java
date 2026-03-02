import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
Example input: isConnected = [
    [1,1,0],
    [1,1,0],
    [0,0,1]]

Return the total number of provinces. */

public class FindCircleNum {
    Map<Integer, List<Integer>> graph = new HashMap<>();
    boolean[] seen;

    public int findCircleNum(int[][] isConnected) {
        // Build undirected graph with given adjacency matrix
        int n = isConnected.length;
        for (int i = 0; i < n; i++) {
            if (!graph.containsKey(i))
                graph.put(i, new ArrayList<>());

            for (int j = i + 1; j < n; j++) {
                if (!graph.containsKey(j))
                    graph.put(j, new ArrayList<>());

                if (isConnected[i][j] == 1) {
                    graph.get(i).add(j);
                    graph.get(j).add(i);
                }
            }
        }

        seen = new boolean[n];
        int provincesCount = 0;

        for (int node = 0; node < n; node++) {
            // If a node has not been seen, it's an unvisited province
            if (!seen[node]) {
                // Increment provinces and
                // set all nodes of connected component to true in seen
                provincesCount++;
                seen[node] = true;
                dfs(node);
            }
        }

        return provincesCount;
    }

    // RECURSIVE DFS
    public void dfs(int node) {
        for (int neighbor : graph.get(node)) {
            // Add all neighbors to seen, completing component (province)
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor);
            }
        }
    }

    // ITERATIVE DFS
    public void dfsIterative(int node) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.addLast(node);

        while (!stack.isEmpty()) {
            int currentNode = stack.removeLast();

            for (int neighbor : graph.get(currentNode)) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    stack.addLast(neighbor);
                }
            }
        }
    }
}

// Time Complexity: O(n^2) where n is the number of cities,
// as we need to iterate through the adjacency matrix to build the graph and in
// the worst case,
// we may visit all cities during DFS.
// Space Complexity: O(n + e) where n is the number of cities and e is the
// number of connections between cities,
// as we need to store the graph and the seen set.
// In the worst case, e can be O(n^2) if all cities are connected to each other.