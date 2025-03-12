import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;

/*There is an undirected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. 
You are also given an integer array restricted which represents restricted nodes.

Return the maximum number of nodes you can reach from node 0 without visiting a restricted node.

Note that node 0 will not be a restricted node. */



public class ReachableNodesWithRestrictions {
    HashMap<Integer, List<Integer>> graph;
    boolean[] seen;

    public int reachableNodes(int n, int[][] edges, int[] restricted) {
        graph = new HashMap<>();

        for (int[] nodes : edges) {
            graph.computeIfAbsent(nodes[0], value -> new ArrayList<>()).add(nodes[1]);
            graph.computeIfAbsent(nodes[1], value -> new ArrayList<>()).add(nodes[0]);
        }

        seen = new boolean[n];
        for (int node : restricted) {
            seen[node] = true;
        }
        seen[0] = true;

        return getReachableNodesCount(0);
    }

    public int getReachableNodesCount(int startingNode) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.add(startingNode);

        int reachableNodesCount = 1;

        while (!stack.isEmpty()) {
            int node = stack.removeLast();

            for (int neighbor : graph.get(node)) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    reachableNodesCount++;
                    stack.add(neighbor);
                }
            }
        }

        return reachableNodesCount;
    }
}
