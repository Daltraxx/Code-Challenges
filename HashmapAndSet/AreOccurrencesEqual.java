public class AreOccurrencesEqual {
  public boolean areOccurrencesEqual(String s) {
    int[] frequencies = new int[26];
    for (char c : s.toCharArray()) {
      frequencies[c - 'a']++;
    }

    int prevCount = 0;
    for (int count : frequencies) {
      if (count > 0) {
        if (prevCount == 0) {
          prevCount = count;
        } else if (count != prevCount) {
          return false;
        }
      }
    }

    return true;
  }
}

// Time complexity: O(n) where n is the length of the input string.
// We need to iterate through the input string once to count the frequency of
// each character.
// Iterating through the frequency array takes O(1) time since it has a fixed
// size of 26.
// Space complexity: O(1) since the frequency array has a fixed size of 26
// regardless of the input size.
