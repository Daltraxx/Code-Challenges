import java.util.ArrayList;
import java.util.List;

/*Given a directed acyclic graph, with n vertices numbered from 0 to n-1, 
and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable. 
It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order. */

public class FindSmallestSetOfVertices {
    public List<Integer> findSmallestSetOfVertices(int n, List<List<Integer>> edges) {
        // Get indegree for each node
        int[] nodeIndegrees = new int[n];
        for (List<Integer> edge : edges) {
            nodeIndegrees[edge.get(1)]++;
        }

        // If a node's indegree is 0,
        // it is unreachable by other nodes and therefore necessary
        List<Integer> necessaryVertices = new ArrayList<>();
        for (int node = 0; node < n; node++) {
            if (nodeIndegrees[node] == 0) {
                necessaryVertices.add(node);
            }
        }

        return necessaryVertices;
    }
}

// Time Complexity: O(n + e) where n is the number of nodes and e is the number
// of edges. We need to iterate through all edges to calculate indegrees, and
// then through all nodes to find those with indegree 0.
// Space Complexity: O(n) for the indegree array and the list of necessary
// vertices.