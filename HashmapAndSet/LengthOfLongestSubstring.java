import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class LengthOfLongestSubstring {
  public int lengthOfLongestSubstring(String s) {
    Set<Character> currChars = new HashSet<>();
    int longestSubstring = 0;
    int left = 0;
    for (int right = 0; right < s.length(); right++) {
      char c = s.charAt(right);
      while (currChars.contains(c)) {
        currChars.remove(s.charAt(left));
        left++;
      }
      currChars.add(c);
      longestSubstring = Math.max(right - left + 1, longestSubstring);
    }

    return longestSubstring;
  }

  // Time complexity: O(n) where n is the length of the input string.
  // We iterate through the input string once,
  // and each character is added and removed from the set at most once.
  // Space complexity: O(min(m, n)), or O(n) in the worst case
  // where all characters are unique.

  public int lengthOfLongestSubstringOptimized(String s) {
    Map<Character, Integer> currChars = new HashMap<>();
    int longestSubstring = 0;
    int left = 0;
    for (int right = 0; right < s.length(); right++) {
      char c = s.charAt(right);
      int prevIndex = currChars.getOrDefault(c, -1);
      if (prevIndex != -1) {
        left = Math.max(prevIndex + 1, left);
      }
      currChars.put(c, right);
      longestSubstring = Math.max(right - left + 1, longestSubstring);
    }

    return longestSubstring;
  }

  // Same time and space complexity as the previous solution, but strictly fewer
  // operations.
}
