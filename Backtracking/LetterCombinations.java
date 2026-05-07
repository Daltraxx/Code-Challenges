import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class LetterCombinations {
  private static final Map<Character, String> numToLetterMap = Map.of(
      '2', "abc",
      '3', "def",
      '4', "ghi",
      '5', "jkl",
      '6', "mno",
      '7', "pqrs",
      '8', "tuv",
      '9', "wxyz");

  private int n;
  private String digits;
  private List<String> combinations;

  public List<String> letterCombinations(String digits) {
    if (digits.isEmpty()) {
      return new ArrayList<>();
    }
    n = digits.length();
    this.digits = digits;
    combinations = new ArrayList<>();
    backtrack(new StringBuilder(), 0);
    return combinations;
  }

  private void backtrack(StringBuilder curr, int i) {
    if (i == n) {
      combinations.add(curr.toString());
      return;
    }

    String letters = numToLetterMap.get(digits.charAt(i));
    for (int j = 0; j < letters.length(); j++) {
      curr.append(letters.charAt(j));
      backtrack(curr, i + 1);
      curr.deleteCharAt(curr.length() - 1);
    }
  }
}

// Time complexity: O(3^n * 4^m)
// where n is the number of digits that map to 3 letters (2, 3, 4, 5, 6, 8)
// and m is the number of digits that map to 4 letters (7, 9).
// This is because each digit can generate either 3 or 4 combinations.
// Space complexity: O(n) for the recursion stack and the current combination
// StringBuilder,
// not counting the output list which can grow exponentially in size.