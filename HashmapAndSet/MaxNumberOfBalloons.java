import java.util.Map;

public class MaxNumberOfBalloons {
  public int maxNumberOfBalloons(String text) {
    int[] frequencyArr = new int[26];
    for (char c : text.toCharArray()) {
      frequencyArr[c - 'a']++;
    }
    Map<Character, Integer> required = Map.of(
        'b', 1,
        'a', 1,
        'l', 2,
        'o', 2,
        'n', 1);

    int minPossible = Integer.MAX_VALUE;
    for (Map.Entry<Character, Integer> entry : required.entrySet()) {
      char c = entry.getKey();
      int neededPerWord = entry.getValue();
      minPossible = Math.min(frequencyArr[c - 'a'] / neededPerWord, minPossible);
    }

    return minPossible;
  }
}

// Time complexity: O(n) where n is the number of characters in the input
// string.
// We iterate through the input string once to count the characters.
// Space complexity: O(1) since the character counts are stored in a
// fixed size array of length 26 (assuming only lowercase letters).