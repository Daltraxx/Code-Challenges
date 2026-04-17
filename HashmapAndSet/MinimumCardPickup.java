import java.util.HashMap;
import java.util.Map;

public class MinimumCardPickup {
  public int minimumCardPickup(int[] cards) {
    Map<Integer, Integer> cardMap = new HashMap<>();
    int minConsecutive = Integer.MAX_VALUE;
    for (int i = 0; i < cards.length; i++) {
      int card = cards[i];
      Integer prevIndex = cardMap.get(card);
      if (prevIndex != null) {
        minConsecutive = Math.min(i - prevIndex + 1, minConsecutive);
        if (minConsecutive == 2) {
          return 2;
        }
      }
      cardMap.put(card, i);
    }

    return minConsecutive == Integer.MAX_VALUE ? -1 : minConsecutive;
  }
}

// Time Complexity: O(n) where n is the length of the cards array. We iterate
// through the array once.
// Space Complexity: O(n) in the worst case, if all cards are unique, we store
// each card in the hashmap.