public class BackspaceCompare {
  public boolean backspaceCompare(String s, String t) {
    int sSkips = 0;
    int tSkips = 0;

    int i = s.length() - 1;
    int j = t.length() - 1;

    while (i >= 0 || j >= 0) {
      // Find next valid char in s
      boolean sValidChar = false;
      while (!sValidChar && i >= 0) {
        char sChar = s.charAt(i);
        if (sChar == '#') {
          sSkips++;
          i--;
        } else if (sSkips > 0) {
          sSkips--;
          i--;
        } else {
          sValidChar = true;
        }
      }

      // Find next valid char in t
      boolean tValidChar = false;
      while (!tValidChar && j >= 0) {
        char tChar = t.charAt(j);
        if (tChar == '#') {
          tSkips++;
          j--;
        } else if (tSkips > 0) {
          tSkips--;
          j--;
        } else {
          tValidChar = true;
        }
      }

      // Compare chars
      if (sValidChar != tValidChar) {
        // If run out of letters on one string but not the other, return false
        return false;
      } else if (sValidChar && tValidChar && s.charAt(i) != t.charAt(j)) {
        // If two valid characters found, return false if not the same
        return false;
      }
      i--;
      j--;
    }

    return true;
  }
}

// Time Complexity: O(n + m) where n and m are the lengths of s and t respectively
// Space Complexity: O(1)