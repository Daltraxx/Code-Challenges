import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GroupAnagrams {
  public List<List<String>> groupAnagramsFreqKey(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
      int[] freq = new int[26];
      for (char c : s.toCharArray()) {
        freq[c - 'a']++;
      }
      StringBuilder keyBuilder = new StringBuilder();
      for (int count : freq) {
        keyBuilder.append(count).append('#'); // Use '#' as a delimiter to avoid ambiguity
      }
      String key = keyBuilder.toString();
      if (!map.containsKey(key)) {
        map.put(key, new ArrayList<>());
      }
      map.get(key).add(s);
    }
    return new ArrayList<>(map.values());
  }

  // Time complexity: O(n * m) where n is the number of strings
  // and m is the average length of the strings (for creating the frequency key).
  // Joining the frequency array takes O(26) which is constant, so it does not
  // affect the overall complexity.
  // Space complexity: O(n * m) for storing the grouped anagrams.

  public List<List<String>> groupAnagramsSortedKey(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
      char[] chars = s.toCharArray();
      Arrays.sort(chars);
      String key = new String(chars);
      map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    return new ArrayList<>(map.values());
  }

  // Time complexity: O(n * m log m) where n is the number of strings
  // and m is the average length of the strings (for sorting each string).
  // Space complexity: O(n * m) for storing the grouped anagrams.
}
