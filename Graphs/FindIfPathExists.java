import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/*There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, 
return true if there is a valid path from source to destination, or false otherwise. */

public class FindIfPathExists {
    HashMap<Integer, List<Integer>> graph;
    boolean[] seen;

    public boolean validPath(int n, int[][] edges, int source, int destination) {
        //build graph
        graph = new HashMap<>();

        for (int[] edge : edges) {
            int nodeA = edge[0];
            int nodeB = edge[1];

            graph.computeIfAbsent(nodeA, val -> new ArrayList<>()).add(nodeB);
            graph.computeIfAbsent(nodeB, val -> new ArrayList<>()).add(nodeA);
        }

        //return result of dfs function
        seen = new boolean[n];
        seen[source] = true;

        return doesPathExist(source, destination);
    }

    public boolean doesPathExist(int source, int destination) {
        if (source == destination) {
            return true;
        }
        
        for (int neighbor : graph.get(source)) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                if (doesPathExist(neighbor, destination)) {
                    return true;
                }
            }
        }

        return false;
    }
}
