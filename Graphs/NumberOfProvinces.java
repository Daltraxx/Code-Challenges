import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

/*There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
Example input: isConnected = [
    [1,1,0],
    [1,1,0],
    [0,0,1]]

Return the total number of provinces. */

public class NumberOfProvinces {
    Map<Integer, List<Integer>> graph = new HashMap<>();
    boolean[] seen;

    public int findCircleNum(int[][] isConnected) {
        //build undirected graph with given adjacency matrix
        int n = isConnected.length;
        for (int i = 0; i < n; i++) {
            if (!graph.containsKey(i)) graph.put(i, new ArrayList<>());
            
            for (int j = i + 1; j < n; j++) {
                if (!graph.containsKey(j)) graph.put(j, new ArrayList<>());
                
                if (isConnected[i][j] == 1) {
                    graph.get(i).add(j);
                    graph.get(j).add(i);
                }
            }
        } //graph built

        seen = new boolean[n];
        int provincesCount = 0;

        for (int node = 0; node < n; node++) {
            //if a node has not been seen, it's an unvisited province
            if (!seen[node]) {
                //increment provinces and
                //set all nodes of connected component to true in seen
                provincesCount++;
                seen[node] = true;
                dfs(node);
            }
        }

        return provincesCount;
    }

    public void dfs(int node) {
        for (int neighbor : graph.get(node)) {
            //add all neighbors to seen, completing component (provence)
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor);
            }
        }
    }

    //iterative dfs example
    public void dfsIterative(int node) {
        Stack<Integer> stack = new Stack<>();
        stack.add(node);

        while (!stack.isEmpty()) {
            int currentNode = stack.pop();

            for (int neighbor : graph.get(currentNode)) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    stack.add(neighbor);
                }
            }
        }
    }
}
