import java.util.ArrayList;
import java.util.List;

public class AllPathsSourceTarget {
  int[][] graph;
  List<List<Integer>> paths;
  int target;

  public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
    this.graph = graph;
    paths = new ArrayList<>();
    target = graph.length - 1;
    List<Integer> curr = new ArrayList<>();
    curr.add(0);
    backtrack(curr, 0);
    return paths;
  }

  private void backtrack(List<Integer> curr, int node) {
    if (node == target) {
      paths.add(new ArrayList<>(curr));
      return;
    }

    for (int neighbor : graph[node]) {
      curr.add(neighbor);
      backtrack(curr, neighbor);
      curr.remove(neighbor);
    }
  }
}
