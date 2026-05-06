import java.util.ArrayList;
import java.util.List;

public class AllPathsSourceTarget {
  public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
    List<Integer> curr = new ArrayList<>();
    curr.add(0);
    List<List<Integer>> paths = new ArrayList<>();
    backtrack(curr, graph, paths, graph.length - 1);
    return paths;
  }

  private void backtrack(List<Integer> curr, int[][] graph, List<List<Integer>> paths, int target) {
    int node = curr.get(curr.size() - 1);
    if (node == target) {
      paths.add(new ArrayList<>(curr));
      return;
    }

    for (int neighbor : graph[node]) {
      curr.add(neighbor);
      backtrack(curr, graph, paths, target);
      curr.remove(curr.size() - 1);
    }
  }
}

// Time complexity: O(2^n * n) since there can be up to 2^(n-2) paths in the
// graph,
// and each path can take O(n) time to construct.
// Space complexity: O(n) for the recursion stack and the path storage,
// not including the output, which can be O(2^n * n).
