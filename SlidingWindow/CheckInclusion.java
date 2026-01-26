package SlidingWindow;

public class CheckInclusion {
  public boolean checkInclusion(String s1, String s2) {
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
      int charIndex = getCharIndex(s2.charAt(right));
      windowCharCounts[charIndex]++;
      if (windowCharCounts[charIndex] == reqCharCounts[charIndex])
        reqCharsRemaining--;

      if (reqCharsRemaining == 0)
        return true;

      // Maintain window size
      if (right - left + 1 > s1.length()) {
        charIndex = getCharIndex(s2.charAt(left));
        windowCharCounts[charIndex]--;
        if (windowCharCounts[charIndex] == reqCharCounts[charIndex] - 1)
          reqCharsRemaining++;
      }
    }
    
    return false;
  }

  private int getCharIndex(char letter) {
    return letter - 'a';
  }
}
