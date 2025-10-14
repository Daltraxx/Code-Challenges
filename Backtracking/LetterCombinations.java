import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class LetterCombinations {
  Map<Character, String> numToLetterMap = Map.of(
      '2', "abc",
      '3', "def",
      '4', "ghi",
      '5', "jkl",
      '6', "mno",
      '7', "pqrs",
      '8', "tuv",
      '9', "wxyz");

  int n;
  String digits;
  List<String> combinations;

  public List<String> letterCombinations(String digits) {
    n = digits.length();
    this.digits = digits;
    combinations = new ArrayList<>();
    backtrack(new StringBuilder(), 0);
    return combinations;
  }

  private void backtrack(StringBuilder curr, int i) {
    if (curr.length() == n) {
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

// Time O(4^n⋅n)
// Space O(n)
