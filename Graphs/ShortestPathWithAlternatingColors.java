import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
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

class State {
    int node;
    int colorRequired;
    int steps;
    public State(int node, int colorRequired, int steps) {
        this.node = node;
        this.colorRequired = colorRequired;
        this.steps = steps;
    }
}

public class ShortestPathWithAlternatingColors {
    int n;
    int RED = 0;
    int BLUE = 1;
    Map<Integer, Map<Integer, List<Integer>>> graph = new HashMap<>();

    public int[] shortestAlternatingPaths(int n, int[][] redEdges, int[][] blueEdges) {
        this.n = n;

        graph.put(RED, new HashMap<>());
        graph.put(BLUE, new HashMap<>());

        addToGraph(RED, redEdges);
        addToGraph(BLUE, blueEdges);

        int[] shortestPaths = new int[n];
        Arrays.fill(shortestPaths, -1);

        Deque<State> queue = new ArrayDeque<>();
        queue.add(new State(0, RED, 0));
        queue.add(new State(0, BLUE, 0));

        boolean[][] seen = new boolean[n][2];
        seen[0][RED] = seen[0][BLUE] = true;

        while (!queue.isEmpty()) {
            State state = queue.remove();
            int node = state.node, colorRequired = state.colorRequired, steps = state.steps;

            if (shortestPaths[node] == -1) {
                shortestPaths[node] = steps;
            }

            for (int neighbor : graph.get(colorRequired).get(node)) {
                int nextColorRequired = 1 - colorRequired;
                if (!seen[neighbor][nextColorRequired]) {
                    seen[neighbor][nextColorRequired] = true;
                    queue.add(new State(neighbor, nextColorRequired, steps + 1));
                }
            }
        }

        return shortestPaths; 
    }

    public void addToGraph(int color, int[][] edges) {
        for (int node = 0; node < n; node++) {
            graph.get(color).put(node, new ArrayList<>());
        }
        
        for (int[] edge: edges) {
            int nodeA = edge[0], nodeB = edge[1];
            graph.get(color).get(nodeA).add(nodeB);
        }
    }
}
