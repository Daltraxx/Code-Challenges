import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FindWinners {
  public List<List<Integer>> findWinners(int[][] matches) {
    Map<Integer, Integer> lossCounts = new HashMap<>();
    for (int[] match : matches) {
      int winner = match[0];
      int loser = match[1];
      lossCounts.putIfAbsent(winner, 0);
      lossCounts.merge(loser, 1, Integer::sum);
    }

    List<Integer> zeroLosses = new ArrayList<>();
    List<Integer> oneLoss = new ArrayList<>();
    lossCounts.forEach((player, lossCount) -> {
      if (lossCount == 0) {
        zeroLosses.add(player);
      } else if (lossCount == 1) {
        oneLoss.add(player);
      }
    });

    Collections.sort(zeroLosses);
    Collections.sort(oneLoss);

    return List.of(zeroLosses, oneLoss);
  }
}

// Time complexity: O(n log n) where n is the number of matches.
// We iterate through the matches once to build the loss counts,
// which takes O(n).
// Then we iterate through the loss counts to build the answer,
// which takes O(p) for each list, where p is the number of players in the list,
// or O(n) in the worst case where all players are unique.
// Finally, we sort the two lists of players,
// which takes O(p log p),
// or O(n log n) in the worst case where all players are unique.
// Space complexity: O(n) in the worst case where all players are unique
// and we need to store their loss counts and the answer lists.