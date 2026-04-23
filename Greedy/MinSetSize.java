import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class MinSetSize {
  public int minSetSize(int[] arr) {
    HashMap<Integer, Integer> frequencies = new HashMap<>();
    for (int num : arr) {
      frequencies.merge(num, 1, Integer::sum);
    }

    List<Integer> sortedFrequencies = new ArrayList<>(frequencies.values());
    Collections.sort(sortedFrequencies, Collections.reverseOrder());

    int removed = 0;
    // Integer division safe because arr.length is guaranteed to be even
    int arrHalved = arr.length / 2;
    int setSize = 0;
    for (int frequency : sortedFrequencies) {
      removed += frequency;
      setSize++;
      if (removed >= arrHalved)
        break;
    }

    return setSize;
  }
}

// Time complexity: O(n log n) due to sorting the frequencies.
// Space complexity: O(n) for the frequency map and sorted array.
