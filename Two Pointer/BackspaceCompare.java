public class BackspaceCompare {
  public boolean backspaceCompare(String s, String t) {
    int i = s.length() - 1;
    int j = t.length() - 1;

    while (i >= 0 || j >= 0) {
      // Find next valid index of char in strings
      i = getNextValidIndex(s, i);
      j = getNextValidIndex(t, j);

      // Compare chars
      if (i < 0 || j < 0) {
        // If run out of letters on at least one string,
        // answer is result of whether both have run out of characters or just one
        return i == j;
      } else if (s.charAt(i) != t.charAt(j)) {
        // If two valid characters found, return false if not the same
        return false;
      }
      i--;
      j--;
    }

    return true;
  }

  private int getNextValidIndex(String str, int currIndex) {
    int skips = 0;
    while (currIndex >= 0) {
      if (str.charAt(currIndex) == '#') {
        skips++;
        currIndex--;
      } else if (skips > 0) {
        skips--;
        currIndex--;
      } else {
        return currIndex;
      }
    }

    // String emptied and no valid character found
    return -1;
  }
}

// Time Complexity: O(n + m) where n and m are the lengths of s and t
// respectively
// Space Complexity: O(1)