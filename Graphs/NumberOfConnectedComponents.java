import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/*You have a graph of n nodes. 
You are given an integer n and an array edges where edges[i] = [ai, bi] 
indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph. */

public class NumberOfConnectedComponents {
    boolean[] seen;
    HashMap<Integer, List<Integer>> graph;
    public int countComponents (int n, int[][] edges) {
        //build graph
        graph = new HashMap<>();
        //preemptively place every node in graph..
        //to take into account node's with no edges
        for (int node = 0; node < n; node++) {
            graph.put(node, new ArrayList<>());
        }

        for (int[] edge : edges) {
            int nodeA = edge[0];
            int nodeB = edge[1];
            graph.get(nodeA).add(nodeB);
            graph.get(nodeB).add(nodeA);
        }

        //get count of components
        seen = new boolean[n];
        int componentCount = 0;
        for (int node = 0; node < n; node++) {
            if (!seen[node]) {
                seen[node] = true;
                componentCount++;
                completeComponent(node);
            }
        }

        return componentCount;
    }

    public void completeComponent(int node) {
        for (int neighbor : graph.get(node)) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                completeComponent(neighbor);
            }
        }
    }
}
