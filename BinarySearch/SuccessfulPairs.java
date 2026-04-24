import java.util.Arrays;

public class SuccessfulPairs {
  public int[] successfulPairs(int[] spells, int[] potions, long success) {
    int n = spells.length;
    int m = potions.length;
    Arrays.sort(potions);
    int[] pairs = new int[n];
    for (int i = 0; i < spells.length; i++) {
      int spell = spells[i];
      long strengthReq = (success + spell - 1) / spell;
      int left = 0;
      int right = m;
      while (left < right) {
        int mid = left + (right - left) / 2;
        if (potions[mid] >= strengthReq) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }

      // left is the index of the first potion
      // that meets the strength requirement
      pairs[i] = m - left;
    }

    return pairs;
  }
}

// Time complexity: O((m + n) log m) where m is the number of elements in the
// potions array
// and n is the number of elements in the spells array.
// This is because we first sort the potions array,
// which takes O(m log m) time,
// and then for each spell, we perform a binary search on the sorted potions
// array,
// which takes O(log m) time.
// Since we do this for n spells,
// the total time complexity is O((m + n) log m).
// Space complexity: O(1) if we don't count the space used for the output array,
// or O(n) if we do count the output array.