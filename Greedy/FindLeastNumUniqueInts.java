import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class FindLeastNumUniqueInts {
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int num : arr) {
            counts.put(num, counts.getOrDefault(num, 0) + 1);
        }

        int[] frequencyVals = new int[counts.size()];
        int i = 0;
        for (int frequency : counts.values()) {
            frequencyVals[i++] = frequency;
        }
        Arrays.sort(frequencyVals);
        int remaining = frequencyVals.length;

        for (int frequency : frequencyVals) {
            if (k >= frequency) {
                k -= frequency;
                remaining--;
            } else {
                break;
            }
        }

        return remaining;
    }
}

// Time Complexity: O(n log n) due to sorting the frequency values
// Space Complexity: O(n) for the frequency map and array of frequency values