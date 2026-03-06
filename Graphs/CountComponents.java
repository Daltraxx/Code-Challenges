import java.util.ArrayList;
import java.util.List;

/*You have a graph of n nodes. 
You are given an integer n and an array edges where edges[i] = [ai, bi] 
indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph. */

public class CountComponents {
    boolean[] seen;
    List<List<Integer>> graph;

    public int countComponents(int n, int[][] edges) {
        // Build graph
        graph = new ArrayList<>();
        for (int node = 0; node < n; node++) {
            graph.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            int nodeA = edge[0];
            int nodeB = edge[1];
            graph.get(nodeA).add(nodeB);
            graph.get(nodeB).add(nodeA);
        }

        // Get count of components
        seen = new boolean[n];
        int componentCount = 0;
        for (int node = 0; node < n; node++) {
            if (!seen[node]) {
                componentCount++;
                dfs(node);
            }
        }

        return componentCount;
    }

    private void dfs(int node) {
        seen[node] = true;
        for (int neighbor : graph.get(node)) {
            if (!seen[neighbor]) {
                dfs(neighbor);
            }
        }
    }
}

// Time Complexity: O(n + e) where n is the number of nodes and e is the number
// of edges,
// as we may need to visit each node and edge at most once during DFS.
// Space Complexity: O(n + e) for the graph representation and the seen array.