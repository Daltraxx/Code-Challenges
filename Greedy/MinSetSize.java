import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class MinSetSize {
  public int minSetSize(int[] arr) {
    int arrSize = arr.length;
    HashMap<Integer, Integer> frequencies = new HashMap<>();
    for (int num : arr) {
      frequencies.merge(num, 1, Integer::sum);
    }
    
    List<Integer> sortedFrequencies = new ArrayList<>(frequencies.values());
    Collections.sort(sortedFrequencies, Collections.reverseOrder());

    Double arrHalved = (double) (arrSize / 2);
    int setSize = 0;
    for (int frequency : sortedFrequencies) {
      arrSize = frequency;
      setSize++;
      if (arrSize <= arrHalved)
        break;
    }

    return setSize;
  }
}
