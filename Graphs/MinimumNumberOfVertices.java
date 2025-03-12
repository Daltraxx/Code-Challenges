import java.util.ArrayList;
import java.util.List;

/*Given a directed acyclic graph, with n vertices numbered from 0 to n-1, 
and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable. 
It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order. */

public class MinimumNumberOfVertices {
    public List<Integer> findSmallestSetOfVertices(int n, List<List<Integer>> edges) {
        //get indegree for each node
        int[] nodeIndegrees = new int[n];
        for (List<Integer> edge : edges) {
            nodeIndegrees[edge.get(1)]++;
        }

        //if a node's indegree is 0,
        //it is unreachable by other nodes and therefore necessary
        List<Integer> necessaryVertices = new ArrayList<>();
        for (int node = 0; node < n; node++) {
            if (nodeIndegrees[node] == 0) {
                necessaryVertices.add(node);
            }
        }

        return necessaryVertices;
    }
}
