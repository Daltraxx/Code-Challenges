package SlidingWindow;

public class CheckInclusion {
  public boolean checkInclusion(String s1, String s2) {
    if (s1.length() > s2.length())
      return false;
    
    int[] reqCharCounts = new int[26];
    int[] windowCharCounts = new int[26];
    int reqCharsRemaining = 0;

    for (int i = 0; i < s1.length(); i++) {
      int index = getCharIndex(s1.charAt(i));
      if (reqCharCounts[index] == 0)
        reqCharsRemaining++;
      reqCharCounts[index]++;
    }

    int left = 0;
    for (int right = 0; right < s2.length(); right++) {
      int rightCharIndex = getCharIndex(s2.charAt(right));
      windowCharCounts[rightCharIndex]++;
      if (windowCharCounts[rightCharIndex] == reqCharCounts[rightCharIndex])
        reqCharsRemaining--;

      // Maintain window size
      if (right - left + 1 > s1.length()) {
        int leftCharIndex = getCharIndex(s2.charAt(left));
        if (reqCharCounts[leftCharIndex] > 0 && windowCharCounts[leftCharIndex] == reqCharCounts[leftCharIndex])
          reqCharsRemaining++;
        windowCharCounts[leftCharIndex]--;
        left++;
      }

      if (reqCharsRemaining == 0)
        return true;
    }

    return false;
  }

  private int getCharIndex(char letter) {
    return letter - 'a';
  }
}

  // Time complexity: O(N + M) where N is the length of s2 and M is the length of s1. M is included due to the initial population of the character count array.
  // Space complexity: O(1) since the character count arrays have a fixed size of 26 for lowercase letters.
