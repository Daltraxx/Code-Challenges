import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class CloseStrings {
  public boolean closeStrings(String word1, String word2) {
    if (word1.length() != word2.length())
      return false;

    int n = word1.length();
    Set<Character> charSet1 = new HashSet<>();
    Set<Character> charSet2 = new HashSet<>();
    HashMap<Character, Integer> charCounts1 = new HashMap<>();
    HashMap<Character, Integer> charCounts2 = new HashMap<>();

    for (int i = 0; i < n; i++) {
      char char1 = word1.charAt(i);
      char char2 = word2.charAt(i);
      charSet1.add(char1);
      charSet2.add(char2);
      charCounts1.put(char1, charCounts1.getOrDefault(char1, 0) + 1);
      charCounts2.put(char2, charCounts2.getOrDefault(char2, 0) + 1);
    }

    if (!charSet1.equals(charSet2))
      return false;

    int[] frequencies1 = charCounts1.values().stream().mapToInt(Integer::intValue).sorted().toArray();
    int[] frequencies2 = charCounts2.values().stream().mapToInt(Integer::intValue).sorted().toArray();

    for (int i = 0; i < frequencies1.length; i++) {
      if (frequencies1[i] != frequencies2[i])
        return false;
    }

    return true;
  }
}

// Time Complexity: O(n) where n is the length of the input strings. Sorting takes O(1) time since there are at most 26 unique characters.
// Space Complexity: O(1) since the space used by the hash maps and sets is bounded by the number of unique characters (at most 26 for lowercase English letters).
