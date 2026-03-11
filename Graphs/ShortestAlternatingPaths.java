import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Deque;
import java.util.HashMap;
import java.util.Map;

/*You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. 
Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

You are given two arrays redEdges and blueEdges where:

redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.

Return an array answer of length n, 
where each answer[x] is the length of the shortest path from node 0 to node x 
such that the edge colors alternate along the path, 
or -1 if such a path does not exist. */

public class ShortestAlternatingPaths {
    int n;
    private static final int RED = 0;
    private static final int BLUE = 1;
    Map<Integer, ArrayList<ArrayList<Integer>>> graph = new HashMap<>();

    public int[] shortestAlternatingPaths(int n, int[][] redEdges, int[][] blueEdges) {
        this.n = n;
        graph.put(RED, new ArrayList<>());
        graph.put(BLUE, new ArrayList<>());

        generateAdjacencyList(RED, redEdges);
        generateAdjacencyList(BLUE, blueEdges);

        int[] shortestPaths = new int[n];
        Arrays.fill(shortestPaths, -1);

        // Queue stores int arrays of the form [node, prev_color, steps]
        Deque<int[]> queue = new ArrayDeque<>();
        queue.add(new int[] { 0, RED, 0 });
        queue.add(new int[] { 0, BLUE, 0 });

        boolean[][] seen = new boolean[n][2];
        seen[0][RED] = seen[0][BLUE] = true;

        while (!queue.isEmpty()) {
            int[] state = queue.pollFirst();
            int node = state[0];
            int prevColor = state[1];
            int steps = state[2];

            if (shortestPaths[node] == -1) {
                shortestPaths[node] = steps;
            }

            int currentColor = 1 - prevColor;
            for (int neighbor : graph.get(currentColor).get(node)) {
                if (!seen[neighbor][currentColor]) {
                    seen[neighbor][currentColor] = true;
                    queue.addLast(new int[] { neighbor, currentColor, steps + 1 });
                }
            }
        }

        return shortestPaths;
    }

    public void generateAdjacencyList(int color, int[][] edges) {
        ArrayList<ArrayList<Integer>> adjacencyList = graph.get(color);
        for (int node = 0; node < n; node++) {
            adjacencyList.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            adjacencyList.get(edge[0]).add(edge[1]);
        }
    }
}

// Time Complexity: O(n + r + b) where n is the number of nodes,
// r is the number of red edges,
// and b is the number of blue edges.
// Space Complexity: O(n + r + b) for the graph representation and the seen
// array.