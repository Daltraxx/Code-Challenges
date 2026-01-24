import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class DestCity {
  public String destCity(List<List<String>> paths) {
    Set<String> hasOutgoing = new HashSet<>();
    for (List<String> edge : paths) {
      hasOutgoing.add(edge.get(0));
    }

    for (List<String> edge : paths) {
      if (!hasOutgoing.contains(edge.get(1)))
        return edge.get(1);
    }
    
    return null;
  }
}

// Time Complexity: O(N), where N is the number of paths
// Space Complexity: O(N) for the HashSet