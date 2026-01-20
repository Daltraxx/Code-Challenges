package SlidingWindow;

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

// Time Complexity: O(n)
// Space Complexity: O(1)