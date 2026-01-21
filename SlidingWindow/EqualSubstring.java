package SlidingWindow;

/**
 * Finds the maximum length of a substring where characters can be made equal
 * by changing characters in string s to match string t, with a maximum cost constraint.
 *
 * @param s the source string to be transformed
 * @param t the target string to match
 * @param maxCost the maximum allowed cost for character transformations
 * @return the maximum length of a substring where all characters can be made equal
 *         within the given cost constraint
 *
 * @implNote Uses a sliding window approach with two pointers (left and right).
 *           The cost of transforming a character is the absolute difference of
 *           their ASCII values. The window expands when cost is within budget
 *           and shrinks from the left when cost exceeds maxCost.
 *
 * Time Complexity: O(n) where n is the length of string s
 * Space Complexity: O(1) constant space
 */
public class EqualSubstring {
  public int equalSubstring(String s, String t, int maxCost) {
    int currentCost = 0;
    int maxLength = 0;
    int left = 0;
    for (int right = 0; right < s.length(); right++) {
      currentCost += Math.abs(s.charAt(right) - t.charAt(right));
      while (currentCost > maxCost) {
        currentCost -= Math.abs(s.charAt(left) - t.charAt(left));
        left++;
      }
      maxLength = Math.max(right - left + 1, maxLength);
    }

    return maxLength;
  }
}